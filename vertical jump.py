import cv2
import numpy as np
import tensorflow as tf
import time
import json
import warnings

# Suppress TensorFlow Lite deprecation warning
warnings.filterwarnings("ignore", message=".*tf\\.lite\\.Interpreter is deprecated.*")

# Load MoveNet model
def load_model():
    interpreter = tf.lite.Interpreter(model_path="movenet.tflite")
    interpreter.allocate_tensors()
    return interpreter

INPUT_SIZE = 192
CONFIDENCE_THRESHOLD = 0.5
EDGES = {
    (0, 1): 'm', (0, 2): 'c', (1, 3): 'm', (2, 4): 'c',
    (0, 5): 'm', (0, 6): 'c', (5, 7): 'm', (7, 9): 'm',
    (6, 8): 'c', (8, 10): 'c', (5, 6): 'y', (5, 11): 'm',
    (6, 12): 'c', (11, 12): 'y', (11, 13): 'm', (13, 15): 'm',
    (12, 14): 'c', (14, 16): 'c'
}

# Preprocess image for MoveNet
def preprocess_image(image, input_size):
    image = cv2.resize(image, (input_size, input_size))
    image = np.expand_dims(image, axis=0)
    image = tf.cast(image, dtype=tf.uint8)
    return image

# Draw keypoints and connections
def draw_keypoints(frame, keypoints, confidence_threshold):
    keypoints_with_conf = np.squeeze(keypoints)
    for idx, (x, y, conf) in enumerate(keypoints_with_conf):
        if conf > confidence_threshold:
            cv2.circle(frame, (int(x * frame.shape[1] / INPUT_SIZE), int(y * frame.shape[0] / INPUT_SIZE)), 5, (0, 255, 0), -1)

def draw_connections(frame, keypoints, edges, confidence_threshold):
    keypoints_with_conf = np.squeeze(keypoints)
    for edge, color in edges.items():
        p1, p2 = edge
        y1, x1, c1 = keypoints_with_conf[p1]
        y2, x2, c2 = keypoints_with_conf[p2]
        if (c1 > confidence_threshold and c2 > confidence_threshold):
            cv2.line(frame, (int(x1 * frame.shape[1] / INPUT_SIZE), int(y1 * frame.shape[0] / INPUT_SIZE)),
                     (int(x2 * frame.shape[1] / INPUT_SIZE), int(y2 * frame.shape[0] / INPUT_SIZE)),
                     (0, 0, 255), 2)

# Calculate vertical displacement (height estimate)
def calculate_jump_height(baseline_y, current_y, frame_height):
    # Normalize displacement relative to frame height (rough estimate)
    return max(0, (baseline_y - current_y) / frame_height) * 100  # Percentage of frame height

# Check tampering (simplified)
def check_tampering(total_frames, fps):
    return False  # Placeholder; implement frame-by-frame analysis if needed

# Generate dynamic tips offline (rule-based for vertical jumps)
def generate_dynamic_tips(report):
    """Generate offline vertical jump tips based on report metrics in English."""
    tips = []
    if report['status'] == 'Fail':
        if report['total_reps'] < 5:
            tips.append("1. Increase your jumps by 2-3 daily to build strength.")
        if report['avg_jump_height'] < 10:  # Less than 10% of frame height
            tips.append("2. Jump with more force, bend your knees.")
        if report['consistency'] < 0.5:
            tips.append("3. Land straight on the ground, maintain balance.")
        if report['avg_pause_length_sec'] > 2:
            tips.append("4. Take a 1-second break, start quickly.")
        if not tips or len(tips) < 3:
            tips.extend(["5. Jump on a mat to reduce pressure on your feet."])
    else:  # Pass
        tips.extend([
            "1. Try a 5 cm higher jump.",
            "2. Control your breathing to save energy."
        ])
    return tips[:5]  # Limit to 5 tips

# Generate report
def generate_report(reps, duration_sec, pause_lengths, jump_heights, consistency_std, is_tampered, key_frame=None):
    """Generate analysis report with reps, jump height, and consistency."""
    reps_per_sec = float(reps / duration_sec if duration_sec > 0 else 0)
    avg_pause = float(np.mean(pause_lengths) if pause_lengths else 0)
    avg_jump_height = float(np.mean(jump_heights) if jump_heights else 0)
    consistency_std = float(consistency_std)
    
    consistency_score = float(max(0, 100 - consistency_std * 10))
    pause_score = float(max(0, 100 - avg_pause * 5))
    height_score = float(min(100, avg_jump_height * 5))  # Scale height to score
    overall_score = float(height_score * 0.4 + consistency_score * 0.3 + pause_score * 0.3)
    
    status = 'Pass' if overall_score >= 70 else 'Fail'
    
    report = {
        'total_reps': int(reps),
        'reps_per_sec': round(reps_per_sec, 2),
        'avg_jump_height': round(avg_jump_height, 2),  # In percentage of frame height
        'consistency': round(1 / (1 + consistency_std), 2),
        'avg_pause_length_sec': round(avg_pause, 2),
        'overall_score': round(overall_score, 2),
        'duration_sec': round(float(duration_sec), 2),
        'status': status,
        'is_tampered': is_tampered,
        'is_valid': not is_tampered,
        'dynamic_tips': []
    }
    
    report['dynamic_tips'] = generate_dynamic_tips(report)
    
    return report

# Main function for vertical jump analysis
def main(video_path):
    interpreter = load_model()
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()
    
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print("Error opening video file")
        return
    
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration_sec = total_frames / fps
    frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    
    reps = 0
    jump_heights = []
    pause_lengths = []
    last_rep_time = time.time()
    frames_history = []
    frame_count = 0
    baseline_y = None
    in_jump = False
    key_frame = None
    
    start_time = time.time()
    max_duration = 60  # Max 60 seconds to prevent infinite run
    
    while cap.isOpened() and (time.time() - start_time) < max_duration:
        ret, frame = cap.read()
        if not ret:
            break
        
        frame_count += 1
        if len(frames_history) >= 100:
            frames_history.pop(0)
        frames_history.append(frame.copy())
        if frame_count == total_frames // 2:
            key_frame = frame.copy()
        
        input_image = preprocess_image(frame, INPUT_SIZE)
        interpreter.set_tensor(input_details[0]['index'], input_image)
        interpreter.invoke()
        keypoints = interpreter.get_tensor(output_details[0]['index'])
        
        draw_keypoints(frame, keypoints, CONFIDENCE_THRESHOLD)
        draw_connections(frame, keypoints, EDGES, CONFIDENCE_THRESHOLD)
        
        keypoints_with_conf = np.squeeze(keypoints)
        # Use hip (11) and ankle (13) for vertical jump detection
        if (keypoints_with_conf[11][2] > CONFIDENCE_THRESHOLD and
            keypoints_with_conf[13][2] > CONFIDENCE_THRESHOLD):
            hip_y = keypoints_with_conf[11][1] * frame.shape[0] / INPUT_SIZE
            ankle_y = keypoints_with_conf[13][1] * frame.shape[0] / INPUT_SIZE
            
            if baseline_y is None:
                baseline_y = hip_y  # Set baseline on first frame
            jump_height = calculate_jump_height(baseline_y, hip_y, frame_height)
            jump_heights.append(jump_height)
            
            # Detect jump when hip rises significantly (e.g., >5% of frame height)
            if jump_height > 5 and not in_jump:
                reps += 1
                if reps > 1:
                    pause_lengths.append(time.time() - last_rep_time)
                last_rep_time = time.time()
                in_jump = True
            elif jump_height < 2:  # Back to ground
                in_jump = False
        
        cv2.imshow('Vertical Jump Analysis', frame)
        if cv2.waitKey(1) & 0xFF == ord('q') or cv2.getWindowProperty('Vertical Jump Analysis', cv2.WND_PROP_VISIBLE) < 1:
            break
    
    cap.release()
    cv2.destroyAllWindows()
    
    consistency_std = np.std(jump_heights) if jump_heights else 0
    is_tampered = check_tampering(total_frames, fps)
    
    report = generate_report(reps, duration_sec, pause_lengths, jump_heights, consistency_std, is_tampered, key_frame)
    print("Analysis Report:")
    print(json.dumps(report, indent=2))
    with open('verticaljump_report.json', 'w') as f:
        json.dump(report, f, indent=2)
    print(f"Report saved to verticaljump_report.json")

if __name__ == "__main__":
    video_path = "vertical-jumps.mp4"  # Update with your vertical jump video file path
    main(video_path)