import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import LearnEffect from "./LearnEffect.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // <LearnEffect />
  // </StrictMode>
);
