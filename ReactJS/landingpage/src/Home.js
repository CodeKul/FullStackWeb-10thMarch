import React, { useState } from "react";
import sea from "./sea.mp4";
import "./Home.css";
function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="main">
      <header>
        <h2 className="logo-text">Travel</h2>

        <i
          className={`menu-icon ${
            isOpen ? "fas fa-times move" : "fas fa-bars"
          }`}
          onClick={() => setOpen(!isOpen)}
        ></i>
      </header>
      <div className="text">
        <h2 className="heading-text">Adventure Awaits</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          numquam? Laborum, eveniet deserunt debitis alias ullam eaque et
          necessitatibus magnam.
        </p>
        <button className="btn-explore">Explore</button>
      </div>
      <video src={sea} controls={false} autoPlay={true} muted></video>
      <ul className="social-icons">
        <li>
          <i className="fab fa-facebook-f"></i>
        </li>
        <li>
          <i className="fab fa-instagram"></i>
        </li>
        <li>
          <i className="fab fa-twitter"></i>
        </li>
      </ul>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Review</li>
          <li>Plan Travel</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
