function ProductFunction() {
  let skillsList = [
    "HTML",
    "CSS",
    "Javascript",
    "React JS",
    "Java",
    
  ];
  return (
    <div>
      <h1>List your skills:</h1>
      <ul>
        {skillsList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFunction;
