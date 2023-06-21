import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [manga, setManga] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    let lowercaseSearch = search.toLowerCase();

    if (lowercaseSearch !== "") {
      try {
        const response = await axios.get(
          `https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/mangas/title/${lowercaseSearch}`,
          // `http://localhost:3000/mangas/title/${lowercaseSearch}`,
          {
            headers: {
              Authorization:
                "Bearer a4b2bd6771msh2c09a033218be90p17b986jsna07b85b48652",
            },
          }
        );

        if (response.data) {
          setManga(response.data);
          console.log(response.data);
        } else {
          setManga([]);
          console.log(setManga);
        }
      } catch (error) {
        console.error(error);
        setManga([]);
      }
    } else {
      setManga([]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search mangas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {manga.length > 0 &&
        manga.map((manga) => (
          <Link to={`/mangas/id/${manga._id}`} key={manga._id}>
            <div>
              <h2>{manga.title}</h2>
              <img src={manga.picture_url} alt={manga.title} />
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Search;
