import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext"; // Import the AuthContext

function Signin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { authenticatedUser, setAuthenticatedUser } = useContext(AuthContext); // Destructure setAuthenticatedUser from context

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/users/signin",
        {
          name,
          password,
        }
      );
      if (response.status === 200) {
        setName("");
        setPassword("");
        setAuthenticatedUser(name); // Set the authenticated user once they've successfully signed in
        console.log(`Success signed in ${name}`);
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    // Clear the authenticated user state
    setAuthenticatedUser(null);
    // Clear the local storage or cookie
    localStorage.removeItem("user");
  };

  return (
    <div>
      <h1>Sign In!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={name} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      {authenticatedUser && <button onClick={handleLogout}>Logout</button>}{" "}
      {/* This button will only show up if there's an authenticated user */}
      <span>
        {"Don't have an account? "}
        <Link to="/signup">Go to Signup</Link>
        {" instead."}
      </span>
    </div>
  );
}

export default Signin;
