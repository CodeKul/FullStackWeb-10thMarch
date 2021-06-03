import React from "react";

function DisplayCourses(props) {
  console.log(props);
  return (
    <div>
      {props.courses.map((course) => (
        <li>{course}</li>
      ))}
    </div>
  );
}

export default DisplayCourses;
