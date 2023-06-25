import React, { useState, useContext } from "react";
import axios from "axios";
import { LOCALSTORAGE_KEY } from "../auth/baseURL";
import { AuthContext } from "../auth/AuthContextComponent";
import logo from "../assets/logo/png/logo.png";
import "../styles/Signin.css";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signin() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/users/signin",
        // "http://localhost:3000/users/signin",
        {
          name,
          password,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      if (response.status === 200) {
        const token = response.data.token;
        console.log(token);
        localStorage.setItem(LOCALSTORAGE_KEY, token);
        setName("");
        setPassword("");
        localStorage.setItem("isloggedin", true);

        const logged = localStorage.getItem("isloggedin");

        setIsLoggedIn(logged);

        console.log(`Success signed in ${name}`);
        navigate("/home");
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="username..."
            value={name}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            placeholder="password..."
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      <span>
        {"Dont have an Account?"}
        <Link to="/signup">Go to Signup</Link>
        {" instead."}
      </span>
    </div>
  );
}

export default Signin;
