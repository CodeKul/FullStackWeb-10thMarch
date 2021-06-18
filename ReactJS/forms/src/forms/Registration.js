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

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleClick = () => {
    console.log(user);
  };
  return (
    // firstName,lastName,city-dropdown,gender,isActive,textarea
    <div style={{ marginLeft: "200px", marginTop: "80px" }}>
      <label htmlFor="firstname">FirstName</label>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="lastname">LastName</label>
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="city">Select city </label>
      <select name="city" id="" value={user.city} onChange={handleInputChange}>
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
      <input
        type="radio"
        name="gender"
        value="male"
        checked={user.gender === "male"}
        onChange={handleInputChange}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={user.gender === "female"}
        onChange={handleInputChange}
      />
      <label htmlFor="female">Female</label>
      <br />
      <br />
      <label htmlFor="isactive">Are you active?</label>
      <input
        type="checkbox"
        name="isActive"
        checked={user.isActive}
        value={true}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="message">Leave a Message</label>
      <br />
      <br />
      <textarea
        name="message"
        value={user.message}
        id="message"
        cols="30"
        rows="5"
        onChange={handleInputChange}
      ></textarea>

      <button onClick={handleClick}>View</button>
      <hr />
      <h3>User Details</h3>
      <ul>
        <li>FirstName - {user.firstName}</li>
        <li>LastName - {user.lastName}</li>
        <li>City - {user.city}</li>
        <li>Gender - {user.gender}</li>
        <li>{user.isActive ? "Yes" : "No"}</li>
        <li>Message - {user.message}</li>
      </ul>
    </div>
  );
}

export default Registration;
