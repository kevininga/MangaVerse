import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext"; // Import the AuthContext
import "../styles/Home.css";

const Home = () => {
  const { authenticatedUser } = useContext(AuthContext); // Access the authenticatedUser from context

  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    const fetchMangas = async () => {
      const response = await axios.get(
        "https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/mangas/all"
      );
      setMangas(response.data);
    };

    fetchMangas();
  }, []);

  // Render the Home component only if the user is authenticated
  if (!authenticatedUser) {
    return null;
  }

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
