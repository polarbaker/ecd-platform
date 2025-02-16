from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)

# Mock data for demo
STUDENTS = [
    {
        "id": 1,
        "name": "Alice Smith",
        "progress": {
            "social_skills": 85,
            "language": 75,
            "motor_skills": 90,
            "cognitive": 80
        },
        "recent_activities": [
            "Completed alphabet recognition",
            "Participated in group sharing",
            "Demonstrated counting skills"
        ]
    }
]

LESSONS = []

@app.route('/api/dashboard/metrics', methods=['GET'])
def get_dashboard_metrics():
    return jsonify({
        "attendance": {
            "present": 15,
            "total": 18,
            "rate": 83
        },
        "programs": {
            "active": 12,
            "new": 4
        },
        "teacher_engagement": {
            "rate": 94,
            "change": 5
        },
        "recent_activities": [
            {
                "type": "enrollment",
                "description": "New student enrollment: Sarah Johnson",
                "timestamp": datetime.now().isoformat()
            },
            {
                "type": "lesson",
                "description": "Lesson plan submitted: Early Mathematics",
                "timestamp": (datetime.now() - timedelta(hours=2)).isoformat()
            }
        ]
    })

@app.route('/api/students', methods=['GET'])
def get_students():
    return jsonify(STUDENTS)

@app.route('/api/lessons', methods=['GET', 'POST'])
def handle_lessons():
    if request.method == 'POST':
        lesson = request.json
        lesson['id'] = len(LESSONS) + 1
        LESSONS.append(lesson)
        return jsonify(lesson), 201
    return jsonify(LESSONS)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
