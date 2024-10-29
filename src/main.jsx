import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/sidebar.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
