import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/users/signup",
        {
          name,
          email,
          password,
          verifyPassword,
        }
      );
      if (response.status === 200) {
        setName("");
        setEmail("");
        setPassword("");
        setVerifyPassword("");
       console.log("Success")
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          value={verifyPassword}
          onChange={(event) => setVerifyPassword(event.target.value)}
        />
        <button>Signup</button>
      </form>
      <span>
        {"Already have an account "}
        <Link to="/signin">Go to Signin</Link>
        {" instead."}
      </span>
    </div>
  );
}
