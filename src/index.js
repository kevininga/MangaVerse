import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "../src/components/App";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextComponent from "../src/auth/AuthContextComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthContextComponent>
      <App />
    </AuthContextComponent>
  </Router>
);
