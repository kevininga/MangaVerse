// App.js
import React from "react";
import { Routes, Route} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from "../auth/AuthContextComponent";

import "../styles/App.css";

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Signout from "../components/Signout";
import Favorites from "../pages/Favorites";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import MangaDetails from "../pages/MangaDetails";


function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        {isLoggedIn && (
          <>
            <Route path="/search" element={<Search />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/mangas/id/:id" element={<MangaDetails />} />
            <Route path="/signout" element= {<Signout/>}  />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
