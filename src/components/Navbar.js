import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // include this if you have specific styles for the navbar

function Navbar({ children }) {
  return (
    <div>
      <nav>
        <ul className="navbar-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default Navbar;
