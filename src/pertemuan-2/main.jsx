import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./Container.jsx"; // ⬅️ ini parent kamu
import "./custom.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);