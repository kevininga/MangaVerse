import React, { useState, useContext } from "react";
import axios from "axios";
import { LOCALSTORAGE_KEY } from "../auth/baseURL";
import { AuthContext } from "../auth/AuthContextComponent";

function Signin() {
  const { setIsLoggedIn } = useContext(AuthContext);

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
        // "https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/users/signin",
        `http://localhost:3000/users/signin`,

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
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log(error);
    }
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
    </div>
  );
}

export default Signin;
