import cv2
import numpy as np
import tensorflow as tf
import time
import warnings
import json
import argparse

# Suppress TensorFlow Lite deprecation warning
warnings.filterwarnings("ignore", message=".*tf\\.lite\\.Interpreter is deprecated.*")

# Load MoveNet model
def load_model(model_path):
    interpreter = tf.lite.Interpreter(model_path=model_path)
    interpreter.allocate_tensors()
    return interpreter

INPUT_SIZE = 192
CONFIDENCE_THRESHOLD = 0.4
EDGES = {
    (0, 1): 'm', (0, 2): 'c', (1, 3): 'm', (2, 4): 'c',
    (0, 5): 'm', (0, 6): 'c', (5, 7): 'm', (7, 9): 'm',
    (6, 8): 'c', (8, 10): 'c', (5, 6): 'y', (5, 11): 'm',
    (6, 12): 'c', (11, 12): 'y', (11, 13): 'm', (13, 15): 'm',
    (12, 14): 'c', (14, 16): 'c'
}

# Preprocess image for MoveNet
def preprocess_image(image, input_size, dtype):
    # Convert BGR->RGB and resize
    img_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    img_resized = cv2.resize(img_rgb, (input_size, input_size))

    # If model expects uint8 (common for MoveNet TFLite), send uint8
    if dtype == np.uint8 or str(dtype).lower().find('uint8') != -1:
        input_image = np.expand_dims(img_resized.astype(np.uint8), axis=0)
    else:
        input_image = np.expand_dims(img_resized.astype(np.float32) / 255.0, axis=0)
    return input_image

# Draw keypoints and connections
def draw_keypoints(frame, keypoints, confidence_threshold):
    keypoints = np.squeeze(keypoints)
    if keypoints.ndim != 2 or keypoints.shape[0] < 17:
        return
    h, w = frame.shape[0], frame.shape[1]
    for idx, (y, x, conf) in enumerate(keypoints):
        if conf > confidence_threshold:
            cv2.circle(frame, (int(x * w), int(y * h)), 5, (0, 255, 0), -1)

def draw_connections(frame, keypoints, edges, confidence_threshold):
    keypoints = np.squeeze(keypoints)
    if keypoints.ndim != 2 or keypoints.shape[0] < 17:
        return
    h, w = frame.shape[0], frame.shape[1]
    for edge, color in edges.items():
        p1, p2 = edge
        y1, x1, c1 = keypoints[p1]
        y2, x2, c2 = keypoints[p2]
        if (c1 > confidence_threshold and c2 > confidence_threshold):
            cv2.line(frame, (int(x1 * w), int(y1 * h)),
                     (int(x2 * w), int(y2 * h)),
                     (0, 0, 255), 2)

# Calculate angle between three points
def calculate_angle(a, b, c):
    ba = a - b
    bc = c - b
    norm_ba = np.linalg.norm(ba)
    norm_bc = np.linalg.norm(bc)
    if norm_ba == 0 or norm_bc == 0:
        return np.nan
    cosine_angle = np.dot(ba, bc) / (norm_ba * norm_bc)
    cosine_angle = np.clip(cosine_angle, -1.0, 1.0)
    angle = np.degrees(np.arccos(cosine_angle))
    return angle

# Select best arm (left or right) and compute elbow angle
def get_best_elbow_angle(kp, frame_w, frame_h, conf_threshold=0.4):
    """
    kp: ndarray (17,3) with (y, x, score). Returns (angle_deg, side_str, min_confidence) or (None, None, 0)
    """
    if kp.ndim != 2 or kp.shape[0] < 17:
        return None, None, 0.0

    # left: shoulder=5, elbow=7, wrist=9
    ly, lx, lc = kp[5]
    ey, ex, ec = kp[7]
    wy, wx, wc = kp[9]
    left_conf = min(lc, ec, wc)
    left_angle = None
    if left_conf > conf_threshold:
        shoulder = np.array([lx * frame_w, ly * frame_h])
        elbow = np.array([ex * frame_w, ey * frame_h])
        wrist = np.array([wx * frame_w, wy * frame_h])
        left_angle = calculate_angle(shoulder, elbow, wrist)

    # right: shoulder=6, elbow=8, wrist=10
    ry, rx, rc = kp[6]
    ery, erx, erc = kp[8]
    rwy, rwx, rwc = kp[10]
    right_conf = min(rc, erc, rwc)
    right_angle = None
    if right_conf > conf_threshold:
        shoulder_r = np.array([rx * frame_w, ry * frame_h])
        elbow_r = np.array([erx * frame_w, ery * frame_h])
        wrist_r = np.array([rwx * frame_w, rwy * frame_h])
        right_angle = calculate_angle(shoulder_r, elbow_r, wrist_r)

    # choose arm with higher confidence
    if left_angle is not None and right_angle is not None:
        if left_conf >= right_conf:
            return left_angle, 'left', left_conf
        else:
            return right_angle, 'right', right_conf
    elif left_angle is not None:
        return left_angle, 'left', left_conf
    elif right_angle is not None:
        return right_angle, 'right', right_conf
    else:
        return None, None, 0.0

# Check tampering (simplified)
def check_tampering(total_frames, fps):
    return False  # placeholder

# Dynamic tips and report generation (kept similar to your original logic)
def generate_dynamic_tips(report):
    tips = []
    if report['status'] == 'Fail':
        if report['total_reps'] < 5:
            tips.append("1. Increase your push-ups by 2-3 daily to gradually build strength.")
        if report['consistency'] < 0.5:
            tips.append("2. Keep your body straight, avoid slouching.")
        if report['avg_pause_length_sec'] > 2:
            tips.append("3. Take a 1-2 second break, use counting to help.")
        if report['reps_per_sec'] < 0.05:
            tips.append("4. Speed up a bit, but maintain proper form.")
        if not tips or len(tips) < 3:
            tips.extend(["5. Use a mat on the floor for comfort."])
    else:
        tips.extend([
            "1. Add 2 more push-ups to build strength.",
            "2. Focus on your breathing to improve form."
        ])
    return tips[:5]


def generate_report(reps, duration_sec, pause_lengths, consistency_std, is_tampered, key_frame=None):
    reps_per_sec = float(reps / duration_sec if duration_sec > 0 else 0)
    avg_pause = float(np.mean(pause_lengths) if pause_lengths else 0)
    consistency_std = float(consistency_std)

    consistency_score = float(max(0, 100 - consistency_std * 10))
    pause_score = float(max(0, 100 - avg_pause * 5))
    reps_score = float(min(100, reps_per_sec * 2000))
    overall_score = float(reps_score * 0.4 + consistency_score * 0.3 + pause_score * 0.3)

    status = 'Pass' if overall_score >= 70 else 'Fail'

    report = {
        'total_reps': int(reps),
        'reps_per_sec': round(reps_per_sec, 2),
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


def main(video_path, model_path='movenet.tflite', debug=False, down_threshold=95, up_threshold=140, min_rep_interval=0.4):
    interpreter = load_model(model_path)
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()

    if debug:
        print('Input details:', input_details)
        print('Output details:', output_details)

    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print("Error opening video file:", video_path)
        return

    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    if not fps or np.isnan(fps) or fps <= 0:
        fps = 30.0
    duration_sec = total_frames / fps if fps > 0 else 0

    reps = 0
    angles_history = []
    pause_lengths = []
    frame_count = 0
    key_frame = None

    position = 'up'  # state machine: 'up' or 'down'
    last_rep_time = time.time()

    start_time = time.time()

    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
        frame_count += 1
        if frame_count == max(1, total_frames // 2):
            key_frame = frame.copy()

        # Preprocess and run model
        dtype = input_details[0]['dtype']
        input_image = preprocess_image(frame, INPUT_SIZE, dtype)
        interpreter.set_tensor(input_details[0]['index'], input_image)
        interpreter.invoke()
        keypoints = interpreter.get_tensor(output_details[0]['index'])
        kp = np.squeeze(keypoints)
        if kp.ndim == 3:
            kp = kp[0]

        if kp.ndim != 2 or kp.shape[1] < 3:
            if debug:
                print('Invalid keypoint shape:', kp.shape)
            continue

        # draw skeleton
        draw_keypoints(frame, kp, CONFIDENCE_THRESHOLD)
        draw_connections(frame, kp, EDGES, CONFIDENCE_THRESHOLD)

        frame_h, frame_w = frame.shape[:2]
        angle, side, conf = get_best_elbow_angle(kp, frame_w, frame_h, conf_threshold=CONFIDENCE_THRESHOLD)

        if angle is not None and not np.isnan(angle):
            angles_history.append(angle)
            smooth_angle = float(np.mean(angles_history[-5:]))

            # state machine logic: count when down -> up transition
            if smooth_angle < down_threshold and position != 'down':
                position = 'down'
            elif smooth_angle > up_threshold and position == 'down' and (time.time() - last_rep_time) > min_rep_interval:
                reps += 1
                pause_lengths.append(time.time() - last_rep_time)
                last_rep_time = time.time()
                position = 'up'
                if debug:
                    print(f"Rep #{reps} counted (side={side}, conf={conf:.2f}, angle={smooth_angle:.1f})")

            # overlay debug info on frame
            cv2.putText(frame, f"Angle:{smooth_angle:.1f}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255,255,255), 2)
            cv2.putText(frame, f"Side:{side} conf:{conf:.2f}", (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255,255,255), 2)

        else:
            cv2.putText(frame, "No reliable elbow detected", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0,0,255), 2)

        cv2.putText(frame, f"Reps: {reps}", (10, frame.shape[0]-20), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (0,255,0), 2)
        cv2.imshow('Push-Up Analysis', frame)
        if cv2.waitKey(1) & 0xFF == ord('q') or cv2.getWindowProperty('Push-Up Analysis', cv2.WND_PROP_VISIBLE) < 1:
            break

    cap.release()
    cv2.destroyAllWindows()

    consistency_std = np.std(angles_history) if angles_history else 0
    is_tampered = check_tampering(total_frames, fps)

    report = generate_report(reps, duration_sec, pause_lengths, consistency_std, is_tampered, key_frame)
    print("Analysis Report:")
    print(json.dumps(report, indent=2))
    with open('pushup_report.json', 'w') as f:
        json.dump(report, f, indent=2)
    print(f"Report saved to pushup_report.json")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Push-up analysis using MoveNet TFLite')
    parser.add_argument('--video', type=str, default='/Users/hellom1/Documents/KHEL_MITHRA/push-ups.mp4', help='input video file')
    parser.add_argument('--model', type=str, default='/Users/hellom1/Documents/KHEL_MITHRA/movenet.tflite', help='tflite model path')
    parser.add_argument('--debug', action='store_true', help='enable debug prints and save rep frames')
    parser.add_argument('--down', type=float, default=95.0, help='angle threshold for down position')
    parser.add_argument('--up', type=float, default=140.0, help='angle threshold for up position')
    parser.add_argument('--min-interval', type=float, default=0.4, help='minimum seconds between counted reps')
    args = parser.parse_args()

    main(args.video, model_path=args.model, debug=args.debug, down_threshold=args.down, up_threshold=args.up, min_rep_interval=args.min_interval)