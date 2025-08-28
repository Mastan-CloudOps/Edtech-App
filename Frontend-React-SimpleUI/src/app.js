import React, { useEffect, useState } from "react";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses") // backend API
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>🎓 Genius EdTech App</h1>
      <h2>Available Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.title} - ₹{course.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
