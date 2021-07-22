import React from "react";
import sea from "./sea.mp4";
import "./Home.css";
function Home() {
  return (
    <div className="main">
      <header>
        <h2 className="logo-text">Travel</h2>

        <i className="fas fa-bars menu-icon"></i>
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
      <video src={sea} controls></video>
      <ul className="social-icons">
        <li>
          <i className="fab fa-facebook-f"></i>
        </li>
        <li>
          <i class="fab fa-instagram"></i>
        </li>
        <li>
          <i class="fab fa-twitter"></i>
        </li>
      </ul>
    </div>
  );
}

export default Home;
