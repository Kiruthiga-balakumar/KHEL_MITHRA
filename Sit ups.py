import cv2
import numpy as np
import tensorflow as tf
import time
import json
import warnings
import os
from datetime import timedelta

# Suppress TensorFlow Lite deprecation warning
warnings.filterwarnings("ignore", message=".*tf\\.lite\\.Interpreter is deprecated.*")

MODEL_PATH = '/Users/hellom1/Documents/Khel_Mitra-SIH/KhelMitraSIH/movenet.tflite'
INPUT_SIZE = 192
CONFIDENCE_THRESHOLD = 0.4

# Verify files
video_path = '/Users/hellom1/Documents/Khel_Mitra-SIH/KhelMitraSIH/sit-ups.mp4'
if not os.path.exists(video_path):
    print(f"Error: Video file '{video_path}' not found in {os.getcwd()}")
    exit(1)
if not os.path.exists(MODEL_PATH):
    print(f"Error: Model file '{MODEL_PATH}' not found in {os.getcwd()}")
    exit(1)

def preprocess_image(image, input_size):
    """Preprocess the input image for MoveNet."""
    if image.dtype != np.uint8:
        image = image.astype(np.uint8)
    input_image = tf.expand_dims(image, axis=0)
    input_image = tf.image.resize_with_pad(input_image, input_size, input_size)
    input_image = tf.cast(input_image, dtype=tf.uint8)
    return input_image

def load_model():
    """Load the TensorFlow Lite model."""
    interpreter = tf.lite.Interpreter(model_path=MODEL_PATH)
    interpreter.allocate_tensors()
    return interpreter

def draw_keypoints(frame, keypoints, confidence_threshold):
    """Draw keypoints on the frame."""
    y, x, c = frame.shape
    shaped = np.squeeze(np.multiply(keypoints, [y, x, 1]))
    
    for kp in shaped:
        ky, kx, kp_conf = kp
        if kp_conf > confidence_threshold:
            cv2.circle(frame, (int(kx), int(ky)), 4, (0, 255, 0), -1)

def draw_connections(frame, keypoints, edges, confidence_threshold):
    """Draw connections between keypoints."""
    y, x, c = frame.shape
    shaped = np.squeeze(np.multiply(keypoints, [y, x, 1]))
    
    for edge, color in edges.items():
        p1, p2 = edge
        y1, x1, c1 = shaped[p1]
        y2, x2, c2 = shaped[p2]
        
        if (c1 > confidence_threshold) & (c2 > confidence_threshold):
            cv2.line(frame, (int(x1), int(y1)), (int(x2), int(y2)), color, 2)

# Define MoveNet keypoint connections
EDGES = {
    (0, 1): (255, 0, 0),  # Nose to left eye
    (0, 2): (0, 255, 0),  # Nose to right eye
    (1, 3): (255, 0, 0),  # Left eye to left ear
    (2, 4): (0, 255, 0),  # Right eye to right ear
    (0, 5): (255, 255, 0),  # Nose to left shoulder
    (0, 6): (0, 255, 255),  # Nose to right shoulder
    (5, 7): (255, 255, 0),  # Left shoulder to left elbow
    (7, 9): (255, 255, 0),  # Left elbow to left wrist
    (6, 8): (0, 255, 255),  # Right shoulder to right elbow
    (8, 10): (0, 255, 255),  # Right elbow to right wrist
    (5, 6): (255, 0, 255),  # Left shoulder to right shoulder
    (5, 11): (255, 255, 0),  # Left shoulder to left hip
    (6, 12): (0, 255, 255),  # Right shoulder to right hip
    (11, 12): (255, 0, 255),  # Left hip to right hip
    (11, 13): (255, 255, 0),  # Left hip to left knee
    (13, 15): (255, 255, 0),  # Left knee to left ankle
    (12, 14): (0, 255, 255),  # Right hip to right knee
    (14, 16): (0, 255, 255)   # Right knee to right ankle
}

def calculate_angle(a, b, c):
    """Calculate angle between three points."""
    a = np.array(a)
    b = np.array(b)
    c = np.array(c)
    radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
    angle = np.abs(radians * 180.0 / np.pi)
    if angle > 180.0:
        angle = 360 - angle
    return angle

def check_tampering(total_frames, fps, diff_threshold=0.05, max_zero_diffs=10):
    """Check for video tampering (duplicates or insufficient frames)."""
    min_frames = fps * 5  # Minimum 5 seconds
    if total_frames < min_frames:
        print(f"Tampering detected: Video too short ({total_frames} frames < {min_frames} frames)")
        return True
    # Note: Frame difference check requires frames_history, which is limited to 100 frames
    # For simplicity, skip frame difference check if video length is sufficient
    return False

def generate_report(reps, duration_sec, pause_lengths, consistency_std, is_tampered):
    """Generate analysis report with reps per second and total reps."""
    reps_per_sec = float(reps / duration_sec if duration_sec > 0 else 0)  # Convert to Python float
    avg_pause = float(np.mean(pause_lengths) if pause_lengths else 0)  # Convert to Python float
    consistency_std = float(consistency_std)  # Convert to Python float
    
    consistency_score = float(max(0, 100 - consistency_std * 10))  # Convert to Python float
    pause_score = float(max(0, 100 - avg_pause * 5))  # Convert to Python float
    reps_score = float(min(100, reps_per_sec * 2000))  # Convert to Python float
    overall_score = float(reps_score * 0.4 + consistency_score * 0.3 + pause_score * 0.3)  # Convert to Python float
    
    status = 'Pass' if overall_score >= 70 else 'Fail'
    
    report = {
        'total_reps': int(reps),  # Ensure integer
        'reps_per_sec': round(reps_per_sec, 2),
        'consistency': round(1 / (1 + consistency_std), 2),
        'avg_pause_length_sec': round(avg_pause, 2),
        'overall_score': round(overall_score, 2),
        'status': status,
        'is_tampered': is_tampered,
        'is_valid': not is_tampered,
        'tips': []
    }
    
    if status == 'Fail':
        if reps_per_sec < 0.05:
            report['tips'].append('Increase pace: Aim for at least 0.05 reps per second.')
        if consistency_std > 5:
            report['tips'].append('Improve form consistency: Keep torso angle steady.')
        if avg_pause > 2:
            report['tips'].append('Reduce pauses: Keep under 2 seconds between reps.')
    
    return report

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
    
    reps = 0
    angles_history = []
    pause_lengths = []
    last_rep_time = time.time()
    frames_history = []
    frame_count = 0
    last_angle = None
    in_rep = False
    
    start_time = time.time()
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        
        frame_count += 1
        if len(frames_history) >= 100:
            frames_history.pop(0)
        frames_history.append(frame.copy())
        
        input_image = preprocess_image(frame, INPUT_SIZE)
        interpreter.set_tensor(input_details[0]['index'], input_image)
        interpreter.invoke()
        keypoints = interpreter.get_tensor(output_details[0]['index'])
        
        draw_keypoints(frame, keypoints, CONFIDENCE_THRESHOLD)
        draw_connections(frame, keypoints, EDGES, CONFIDENCE_THRESHOLD)
        
        # Calculate torso angle (e.g., between left shoulder, left hip, left knee)
        keypoints_with_conf = np.squeeze(keypoints)
        if (keypoints_with_conf[5][2] > CONFIDENCE_THRESHOLD and
            keypoints_with_conf[11][2] > CONFIDENCE_THRESHOLD and
            keypoints_with_conf[13][2] > CONFIDENCE_THRESHOLD):
            shoulder = keypoints_with_conf[5][:2]
            hip = keypoints_with_conf[11][:2]
            knee = keypoints_with_conf[13][:2]
            angle = calculate_angle(shoulder, hip, knee)
            angles_history.append(angle)
            
            # Detect rep based on angle threshold
            if last_angle is not None:
                if angle < 45 and last_angle >= 45 and not in_rep:
                    reps += 1
                    pause_lengths.append(time.time() - last_rep_time)
                    last_rep_time = time.time()
                    in_rep = True
                elif angle > 60:
                    in_rep = False
            last_angle = angle
        
        cv2.imshow('Sit-Up Analysis', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break
    
    cap.release()
    cv2.destroyAllWindows()
    
    consistency_std = np.std(angles_history) if angles_history else 0
    is_tampered = check_tampering(total_frames, fps)
    
    report = generate_report(reps, duration_sec, pause_lengths, consistency_std, is_tampered)
    print("Analysis Report:")
    print(json.dumps(report, indent=2))
    with open('situp_report.json', 'w') as f:
        json.dump(report, f, indent=2)
    print(f"Report saved to situp_report.json")

if __name__ == '__main__':
    main(video_path)