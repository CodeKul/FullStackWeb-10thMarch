import DisplayCourses from "./DisplayCourses";

function ProductFunction() {
  let skillsList = ["HTML", "CSS", "Javascript", "React JS", "Java"];
  let courses = ["Data Science", "Python", "AI"];
  return (
    <div>
      <h1>List your skills:</h1>
      <ul>
        {skillsList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <DisplayCourses courses={courses} />
    </div>
  );
}

export default ProductFunction;
