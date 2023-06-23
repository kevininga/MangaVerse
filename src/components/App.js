import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Search from "../components/Search";
import Favorites from "../pages/Favorites";
import MangaDetails from "../pages/MangaDetails";
// import Signout from "./Signout";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../auth/AuthContextComponent";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  // Redirect to the home page if already logged in
  useEffect(() => {
    const logged = localStorage.getItem("isloggedin");
    setIsLoggedIn(logged);

    const handleBeforeUnload = () => {
      // Perform sign out logic here
      setIsLoggedIn(false);
      localStorage.clear();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [setIsLoggedIn]);

  return (
    <>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        {isLoggedIn && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/mangas/id/:id" element={<MangaDetails />} />
            {/* <Route path="/signout" element={<Signout />} /> */}
          </>
        )}
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
