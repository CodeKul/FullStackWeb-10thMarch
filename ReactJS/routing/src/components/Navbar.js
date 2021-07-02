import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          {/* <Link to="/about">About</Link> */}
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          {/* <Link to="/contact">Contact</Link> */}
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          {/* <Link to="/contact">Contact</Link> */}
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
