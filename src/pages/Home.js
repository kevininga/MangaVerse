// pages/Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [mangas, setMangas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMangas = async () => {
      try {
        const response = await axios.get(
          "https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/mangas/all"
        );
        console.log(response);
        setMangas(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchMangas();
  }, []);

  return (
    <div className="manga-grid">
      {mangas.length > 0 ? (
        mangas.map((manga) => (
          <div key={manga._id} className="manga-card">
            <img src={manga.picture_url} alt={manga.title} />
            <h3>{manga.title}</h3>
          </div>
        ))
      ) : (
        <p>No mangas found.</p>
      )}
    </div>
  );
};

export default Home;
