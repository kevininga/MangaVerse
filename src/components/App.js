import React from "react";
import "../styles/App.css";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Favorites from "../pages/Favorites";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
