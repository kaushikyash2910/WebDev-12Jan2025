import React from "react";
import { useParams } from "react-router";
let movies = [
  { name: "F1", description: "Racing Par Movie", year: 2025 },
  { name: "Lionking", description: "Mufasa Par movie", year: 2024 },
  { name: "Extraction", description: "Action Movie", year: 2022 },
  { name: "BLUE", description: "Akshay Kumar Wali", year: 2022 },
  { name: "Jurrasicworld", description: "dino par", year: 2025 },
  { name: "Harrypotter", description: "Jadu ki duniya", year: 2010 },
];

const MovieDetails = () => {
  const { name } = useParams();
  let movie = movies.filter((m) => m.name === name);
  movie = movie[0];
  return (
    <div>
      <h1>Movie Details</h1>
      Name: {movie.name}
      <br />
      Description: {movie.description}
      <br />
      Year: {movie.year}
    </div>
  );
};

export default MovieDetails;
