import React, { useRef } from "react";
import { useNavigate } from "react-router";

const MovieCard = ({ name, description, year }) => {
  const textRef = useRef();
  const navigate = useNavigate();
  function getMovieName() {
    console.log(textRef.current.innerText);
    navigate(`/movies/${textRef.current.innerText}`)
  }

  return (
    <div onClick={getMovieName} className="movie-card">
      <div>
        Title: <span ref={textRef}>{name}</span>
      </div>
    </div>
  );
};

export default MovieCard;
