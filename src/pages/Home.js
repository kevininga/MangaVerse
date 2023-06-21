// pages/Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";

const Home = () => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    const fetchMangas = async () => {
      const response = await axios.get(
        "https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/mangas/all"
      );
      console.log(response)
      setMangas(response.data);
      console.log(response.data);
    };

    fetchMangas();
  }, []);

  return (
    <div className="manga-grid">
      {mangas.map((manga) => (
        <div key={manga._id} className="manga-card">
          <img src={manga.picture_url} alt={manga.title} />
          <h3>{manga.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
