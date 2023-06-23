// components/Search.js
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [manga, setManga] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    let lowercaseSearch = search.toLowerCase();

    if (lowercaseSearch !== "") {
      try {
        const response = await axios.get(
          `http://localhost:3000/mangas/title/${lowercaseSearch}`
        );

        if (response.data) {
          setManga(response.data);
          setShowResults(true);
        } else {
          setManga([]);
          setShowResults(false);
        }
      } catch (error) {
        console.error(error);
        setManga([]);
        setShowResults(false);
      }
    } else {
      setManga([]);
      setShowResults(false);
    }
  };

  const handleExit = () => {
    setShowResults(false);
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
      {showResults && (
      <div className="search-results">
        {manga.length > 0 &&
          manga.map((manga) => (
            <Link key={manga._id} to={`/mangas/id/${manga._id}`}>
              <img src={manga.picture_url} alt={manga.title} />
              <h2>{manga.title}</h2>
            </Link>
          ))}
          <button onClick={handleExit}>Exit</button>
      </div>
      )}
    </div>
  );
};

export default Search;