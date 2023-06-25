import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Search.css";
import { AuthContext } from "../auth/AuthContextComponent";

const Search = ({ setManga, manga, setShowResults, showResults }) => {
  const [search, setSearch] = useState("");
  const { isLoggedIn } = useContext(AuthContext);

  const handleSearch = async () => {
    let lowercaseSearch = search.toLowerCase();
    console.log(isLoggedIn);
    if (isLoggedIn) {
      if (lowercaseSearch !== "") {
        try {
          const response = await axios.get(
            `https://project-3-manga-backend-2d7dcb1090ee.herokuapp.com/mangas/title/${lowercaseSearch}`
          );
          console.log("Mapping manga:", manga);
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

  useEffect(() => {
    if (search !== "") {
      handleSearch();
    } else {
      setManga([]);
      setShowResults(false);
    }
  }, [search]);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search mangas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {showResults && (
        <div className="search-results">
          {manga.length > 0 &&
            manga.map((mangaItem) => (
              <Link
                key={mangaItem._id}
                to={`/mangas/id/${mangaItem._id}`}
                onClick={() => setShowResults(false)}
              >
                <img src={mangaItem.picture_url} alt={mangaItem.title} />
                <h2>{mangaItem.title}</h2>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
