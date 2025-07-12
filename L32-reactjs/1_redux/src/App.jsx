import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import NoMoviesAvailable from "./components/NoMoviesAvailable";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/movies" element={<Movies />}>
          <Route index element={<NoMoviesAvailable />} />
          <Route path=":name" element={<MovieDetails />} />
        </Route>
        
        
      </Routes>
    </div>
  );
};

export default App;
