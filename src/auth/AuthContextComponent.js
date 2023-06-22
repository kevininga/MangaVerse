import React, { createContext, useEffect, useState } from "react";
import { isTokenValid } from "./validToken";
import { LOCALSTORAGE_KEY } from '../auth/baseURL'


// Create a Context Provider called AuthProvider
export const AuthContext = createContext(null);

// Create our own Context component in which data about auth lives on its state
export default function AuthContextComponent({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState({});

  // Write some logic to onload check if the user is logged in, then set loggen in accordingly.
  useEffect(() => {
    const token = localStorage.getItem(LOCALSTORAGE_KEY);
    if (token) {
        isTokenValid().then((response) => setIsLoggedIn(response.valid));
    }
  }, [isLoggedIn]);

  // AuthContext, will simply render the AuthProvider,
  // and pass its state data into it, so other components can use it.
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name }}>
      {children}
    </AuthContext.Provider>
  );
}
