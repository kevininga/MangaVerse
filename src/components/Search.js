// components/Search.js
import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Search.css";
import { AuthContext } from "../auth/AuthContextComponent";

const Search = () => {
  const [search, setSearch] = useState("");
  const [manga, setManga] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  // eslint-disable-next-line
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log("cliked");

    let lowercaseSearch = search.toLowerCase();
    console.log(isLoggedIn);
    if (isLoggedIn) {
      if (lowercaseSearch !== "") {
        try {
          ;
          const response = await axios.get(
            `https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/mangas/title/${lowercaseSearch}`,
            // `http://localhost:3000/mangas/title/${lowercaseSearch}`,
            // {
            //   headers: {
            //     Authorization:
            //       "Bearer a4b2bd6771msh2c09a033218be90p17b986jsna07b85b48652",
            //   },
            // }
          );
          console.log("Mapping manga:", manga)
          if (response.data) {
            setManga(response.data);
            setShowResults(true);
            console.log(response.data);
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
            manga.map((mangaItem) => (
              <Link key={mangaItem._id} to={`/mangas/id/${mangaItem._id}`}>
                <img src={mangaItem.picture_url} alt={mangaItem.title} />
                <h2>{mangaItem.title}</h2>
              </Link>
            ))}
          <button onClick={handleExit}>Exit</button>
        </div>
      )}
    </div>
  );
};

export default Search;
