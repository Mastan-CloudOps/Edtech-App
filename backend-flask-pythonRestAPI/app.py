app = Flask(__name__)

# Sample API route
@app.route("/api/courses", methods=["GET"])
def get_courses():
    courses = [
        {"id": 1, "title": "Python Basics", "price": 500},
        {"id": 2, "title": "DevOps with AWS", "price": 1200},
        {"id": 3, "title": "Kubernetes Bootcamp", "price": 1500},
    ]
    return jsonify(courses)

@app.route("/api/register", methods=["POST"])
def register():
    data = request.json
    return jsonify({"message": f"User {data['name']} registered successfully!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

