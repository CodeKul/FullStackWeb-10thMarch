import React from "react";
import "./css/Navabr.css";
function Navbar() {
  // xxl,xl,lg,md,sm,xs
  //xs --> <=576px
  //sm --> >=576px
  //md  --> >=768px
  //lg --> >=992px
  //xl --> >=1200px

  //line-icons,icons8,fontawesome
  //https://webgradients.com/,Unsplash,Brust,Pexels,Stocksnap,Getty Images,Stock up,Cupcake
  //https://undraw.co/illustrations,stubborn.fun,freeillustrations.xyz,illustrations.co,icons8.co/illustrations
  //opendoodles.com
  //background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="fas fa-code fa-2x"></i>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon d-flex align-items-center justify-content-center">
            <i class="fas fa-bars color-white"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
