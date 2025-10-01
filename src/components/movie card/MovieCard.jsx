import React from "react";


const MovieCard = ({ movie }) => {
  return (
    <div className=" m-2 mt-8 h-40 w-70  rounded   ">
      <div className="">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
          className="h-40 w-70 rounded object-cover"
        />
      </div>
      <h1 className=" text-xl text-white font-bold text-center">{movie.title}</h1>
    </div>
  );
};

export default MovieCard;
