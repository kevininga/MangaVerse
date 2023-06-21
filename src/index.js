import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "../src/components/App";
import AuthContextComponent from "../src/auth/AuthContextComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React>
    <AuthContextComponent>
      <App />
    </AuthContextComponent>
  </React>
);
