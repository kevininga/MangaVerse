import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Search from "../components/Search";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContextComponent";

function Navbar({ children }) {
  const { handleLogout } = useContext(AuthContext);

  const handleClickSignout = () => {
    handleLogout();
    console.log("Successfully logged out");
  };

  return (
    <div>
      <nav>
        <ul className="navbar-list">
          <li>
            <Search />
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/">Signin</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <button onClick={handleClickSignout}>Signout</button>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default Navbar;
