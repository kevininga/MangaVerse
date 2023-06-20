import React, { useState } from "react";
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
          `http://localhost:3000/mangas/title/${lowercaseSearch}`
        );

        if (response.data) {
          setManga(response.data);
        } else {
          setManga([]);
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
          <div key={manga._id}>
            <h2>{manga.title}</h2>
            <img src={manga.picture_url} alt={manga.title} />
          </div>
        ))}
    </div>
  );
};

export default Search;
