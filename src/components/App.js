// App.js
import React from "react";
import "../styles/App.css";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Favorites from "../pages/Favorites";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import MangaDetails from "../pages/MangaDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContextComponent";
import { useContext } from "react";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {isLoggedIn && (
          <>
            <Route path="/search" element={<Search />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/mangas/id/:id" element={<MangaDetails />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
