import React, { useState } from "react";

function FormComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const[city,setCity]=useState("")
  
  const handleFirstName = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  };
  const handleLastName=(e)=>{
      setLastName(e.target.value)
  }
  return (
    <div>
      <label htmlFor="fname">FirstName</label>
      <input type="text" value={firstName} onChange={handleFirstName} />
         <br/><br/>
      <label htmlFor="fname">FirstName</label>
      <input type="text" value={lastName} onChange={handleLastName}/>
      <p>{firstName} {lastName}</p>
    </div>
  );
}

export default FormComponent;
