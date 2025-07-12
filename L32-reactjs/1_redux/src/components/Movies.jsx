import React, { Fragment } from "react";
import MovieCard from "./MovieCard";
import { Outlet } from "react-router";

let movies = [
  { name: "F1", description: "Racing Par Movie", year: 2025 },
  { name: "Lionking", description: "Mufasa Par movie", year: 2024 },
  { name: "Extraction", description: "Action Movie", year: 2022 },
  { name: "BLUE", description: "Akshay Kumar Wali", year: 2022 },
  { name: "Jurrasicworld", description: "dino par", year: 2025 },
  { name: "Harrypotter", description: "Jadu ki duniya", year: 2010 },
];

const Movies = () => {
  return (
    <>
      <h1>List of all movies</h1>
      <div className="movie-list">
        {movies.map((movie, indx) => (
          <MovieCard
            key={indx}
            name={movie.name}
            description={movie.description}
            year={movie.year}
          />
        ))}
      </div>

      <Outlet />
    </>
  );
};

export default Movies;
