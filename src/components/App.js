import React, { useContext, useEffect, useState } from "react"; // <-- Added useState
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Search from "../components/Search";
import Favorites from "../pages/Favorites";
import MangaDetails from "../pages/MangaDetails";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../auth/AuthContextComponent";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [showResults, setShowResults] = useState(false); // <-- Added state here

  useEffect(() => {
    const logged = localStorage.getItem("isloggedin");
    setIsLoggedIn(logged);

    const handleBeforeUnload = () => {
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
      {isLoggedIn && <Navbar setShowResults={setShowResults} />}{" "}
      {/* <-- Passed setShowResults here */}
      <Routes>
        <Route path="/" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        {isLoggedIn && (
          <>
            <Route
              path="/home"
              element={<Home setShowResults={setShowResults} />}
            />{" "}
            {/* <-- And here */}
            <Route
              path="/search"
              element={
                <Search
                  showResults={showResults}
                  setShowResults={setShowResults}
                />
              }
            />{" "}
            {/* <-- And here */}
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/mangas/id/:id" element={<MangaDetails />} />
          </>
        )}
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
