// pages/Home.js
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { LOCALSTORAGE_KEY } from "../auth/baseURL";
import { AuthContext } from "../auth/AuthContextComponent";

// console.log(`this is from home ${LOCALSTORAGE_KEY}`);
const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);

  console.log(isLoggedIn);

  const [mangas, setMangas] = useState([]);

  useEffect(() => {

    if (isLoggedIn) {
      const fetchMangas = async () => {
        const response = await axios.get(
          // "https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/mangas/all",
          "http://localhost:3000/mangas/all",
          {
            headers: {
              Authorization: LOCALSTORAGE_KEY,
            },
          }
        );
        console.log(response);
        setMangas(response.data);
        console.log(response.data);
      };


      fetchMangas();
    }
  }, [isLoggedIn]);

  return isLoggedIn ? (
    <div className="manga-grid">
      {mangas.map((manga) => (
        <div key={manga._id} className="manga-card">
          <Link
            to={`/mangas/id/${manga._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={manga.picture_url} alt={manga.title} />
            <h3>{manga.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <span>NOPE</span>
  );
};

export default Home;
