import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./Container";
import "./custom.css"; // 🔥 INI PENTING
import "tailwindcss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);