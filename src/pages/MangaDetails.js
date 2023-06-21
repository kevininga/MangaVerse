// pages/MangaDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/MangaDetails.css";

const MangaDetails = () => {
  const { id } = useParams();
  const [manga, setManga] = useState(null);

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/mangas/id/${id}`
        );
        setManga(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchManga();
  }, [id]);

  if (!manga) {
    return <div>Loading...</div>;
  }

  return (
    <div className="manga-details">
      <img src={manga.picture_url} alt={manga.title} />
      <div className="info">
        <h1>{manga.title}</h1>
        <p>Published: {manga.aired_on}</p>
        <p>Synopsis: {manga.synopsis}</p>
      </div>
    </div>
  );
};

export default MangaDetails;
