import React from "react";
//useState(),useEffect - 
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
