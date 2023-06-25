import React, { createContext, useState } from "react";
import { LOCALSTORAGE_KEY } from "../auth/baseURL";

export const AuthContext = createContext(null);

export default function AuthContextComponent({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState({});

  useState(() => {
    const token = localStorage.getItem(LOCALSTORAGE_KEY);
    setIsLoggedIn(!!token);
  });

  const handleLogout = () => {
    localStorage.removeItem(LOCALSTORAGE_KEY);
    localStorage.removeItem("isloggedin"); // Remove isloggedin key
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, name, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
