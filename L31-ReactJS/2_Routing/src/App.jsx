import React, { useState } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

/*
const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("contact")}>Contact</button>

      {page == "home" && <Home />}
      {page == "contact" && <Contact />}
    </div>
  );
};
*/
export default App;
