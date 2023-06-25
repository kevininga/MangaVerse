import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Search from "../components/Search";
import { AuthContext } from "../auth/AuthContextComponent";

function Navbar({ children }) {
  const { handleLogout } = useContext(AuthContext);
  const [manga, setManga] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleClickSignout = () => {
    handleLogout();
    console.log("Successfully logged out");
  };

  return (
    <div>
      <nav>
        <ul className="navbar-list">
           <li className="search-bar">
            <Search
              setShowResults={setShowResults}
              manga={manga}
              setManga={setManga}
              showResults={showResults}
            />
          </li>
            <li>
            <Link to="/home" onClick={() => setShowResults(false)}>
                Home
              </Link>
          </li>
          <li>
          <Link to="/favorites" onClick={() => setShowResults(false)}>
                Favorites
              </Link>
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
