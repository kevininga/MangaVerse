// pages/MangaDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/MangaDetails.css";
import { toast } from "react-toastify";

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

  const addMangaToFavorite = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/favorites/add/manga/${id}`
      );
      if (response.data.isAlreadyFavorite) {
        toast.error("Manga is already added to favorites!", {
          toastId: "alreadyFavorite",
        });
      } else {
        toast.success("Manga added to favorites!", {
          toastId: "addedFavorite",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!manga) {
    return <div>Loading...</div>;
  }

  return (
    <div className="manga-details">
      <img src={manga.picture_url} alt={manga.title} />
      <div className="info">
        <h1>{manga.title}</h1>
        <p>
          <span>Published:</span> {manga.aired_on}
        </p>
        <p>
          <span>Synopsis:</span> {manga.synopsis}
        </p>
        <button className="favorite-button" onClick={addMangaToFavorite}>
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default MangaDetails;
