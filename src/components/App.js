// App.js
import React from "react";
import "../styles/App.css";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Favorites from "../pages/Favorites";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import MangaDetails from "../pages/MangaDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Signin />
      <Navbar />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Signin />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/mangas/id/:id" element={<MangaDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
