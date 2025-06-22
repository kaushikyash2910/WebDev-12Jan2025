import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import LearnUseMemo from "./LearnUseMemo.jsx";
import LearnuseCallback from "./LearnuseCallback.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* {<LearnUseMemo />} */}
    {<LearnuseCallback />}
  </StrictMode>
);
