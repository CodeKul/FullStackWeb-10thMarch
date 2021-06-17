import React, { useState } from "react";

function Registration() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    city: "",
    isActive: false,
    message: "",
  });

  return (
    // firstName,lastName,city-dropdown,gender,isActive,textarea
    <div style={{ marginLeft: "200px", marginTop: "80px" }}>
      <label htmlFor="firstname">FirstName</label>
      <input type="text" />
      <br />
      <br />
      <label htmlFor="lastname">LastName</label>
      <input type="text" />
      <br />
      <br />
      <label htmlFor="city">Select city </label>
      <select name="" id="">
        <option value="pune">Pune</option>
        <option value="mumbai">Mumbai</option>
        <option value="thane">Thane</option>
        <option value="nashik">Nashik</option>
      </select>
      <br />
      <br />
      <label htmlFor="gender">Select gender </label>
      <br />
      <br />
      <input type="radio" />
      <label htmlFor="male">Male</label>
      <input type="radio" />
      <label htmlFor="female">Female</label>
      <br />
      <br />
      <label htmlFor="isactive">Are you active?</label>
      <input type="checkbox" />
      <br />
      <br />
      <label htmlFor="message">Leave a Message</label>
      <br />
      <br />
      <textarea name="" id="message" cols="30" rows="5"></textarea>
    </div>
  );
}

export default Registration;
