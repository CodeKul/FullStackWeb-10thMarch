import React, { useState } from "react";

function UserForm() {
  const [userDetails, setDetails] = useState({
    firstName: "",
    lastName: "",
    message: "",
    isChecked: false,
    gender: "",
    carName: "",
    price: 0,
  });

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setDetails({ ...userDetails, [e.target.name]: value });
  };
  return (
    <div style={{ marginTop: "50px", marginLeft: "60px" }}>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        name="firstName"
        value={userDetails.firstName}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={userDetails.lastName}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <label htmlFor="message">Message</label>
      <br />
      <br />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        name="message"
        value={userDetails.message}
        onChange={handleInputChange}
      ></textarea>
      <br />
      <br />

      <input
        type="checkbox"
        name="isChecked"
        checked={userDetails.isChecked}
        onChange={handleInputChange}
      />
      <label htmlFor="brochure">Do you want a brochure</label>
      <br />
      <br />

      <label htmlFor="gender">Gender</label>
      <br />
      <br />
      <input
        type="radio"
        name="gender"
        value="male"
        checked={userDetails.gender === "male"}
        onChange={handleInputChange}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        value="female"
        checked={userDetails.gender === "female"}
        onChange={handleInputChange}
      />
      <label htmlFor="female">Female</label>
      <br />
      <br />

      <label htmlFor="car">Select you car</label>
      <select
        id=""
        name="carName"
        value={userDetails.carName}
        onChange={handleInputChange}
      >
        <option value="Mercedes">Mercedes</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
      </select>
      <br />
      <br />

      <label htmlFor="price">Select price range</label>
      <input
        type="range"
        name="price"
        min="2000000"
        max="50000000"
        value={userDetails.price}
        onChange={handleInputChange}
      />
      <br />
      <br />

      <div>
        <li>FirstName - {userDetails.firstName}</li>
        <li> LastName - {userDetails.lastName}</li>
        <li> Message - {userDetails.message}</li>
        <li> Do you want a brochure- {userDetails.isChecked?"Yes":"No"}</li>
        <li> Gender- {userDetails.gender}</li>
        <li>Car - {userDetails.carName}</li>
        <li>Price - {userDetails.price}</li>
      </div>
    </div>
  );
}

export default UserForm;
