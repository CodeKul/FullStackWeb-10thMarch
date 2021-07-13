import React from "react";
import "./css/Home.css";
import Navbar from "./Navbar";
import home from "./css/img/homered.svg";
function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content d-flex justify-content-around flex-wrap">
        <div className="home-text text-white align-self-center ">
          <h1>Welcome to my Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            minus corrupti perferendis sapiente veritatis inventore architecto
            neque unde quo blanditiis!
          </p>
        </div>
        <div className="home-img pb-3">
          <img src={home} width="500" height="500" alt="" />
        </div>
      </div>
      <div className="down-icon pb-5">
        <a href="#about">
          <i class="fas fa-arrow-circle-down fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

export default Home;
