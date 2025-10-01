import React, { useEffect, useState, useRef } from "react";
import MovieCard from "../movie card/MovieCard";
import "./movie.css";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Movies = ({ category }) => {
  const [movieData, setMovieData] = useState([]);
  const movieRef = useRef();
  const SearchValue = useSelector((state) => state.search);

  useEffect(() => {
    async function dataFetch() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3MWVmYWQ4ZDA5ZWIzMWY4YTg2ZTcwNGRhMzQ0MCIsIm5iZiI6MTc1OTEyNTg5My4zNDcwMDAxLCJzdWIiOiI2OGRhMjE4NTYyYjBhZTVmM2VlMWM5ZDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qBBUYb-bHbWNPgRvrTV0n5GaTuPP2fhcLjfHEYBR2e4",
          },
        }
      );
      const data = await res.json();
      setMovieData(data.results || []);
    }

    dataFetch();
  }, [category]);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      movieRef.current.scrollLeft += event.deltaY;
    };

    const refCurrent = movieRef.current;
    if (refCurrent) {
      if (window.innerWidth >= 768) {
        refCurrent.addEventListener("wheel", handleWheel);
      }
    }
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <>
      <h1 className="m-2 text-white text-3xl font-bold capitalize">
        {category}
      </h1>

      <div
        className="scroll flex gap-4 px-2 shrink-0 overflow-x-auto"
        ref={movieRef}
      >
        {movieData
          .filter((movie) =>
            movie.title.toLowerCase().includes(SearchValue.toLowerCase())
          )
          .map((movie) => (
            <div key={movie.id} className="shrink-0">
              <Link to={`/player/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>

              <h1 className="opacity-0">{movie.title}</h1>
            </div>
          ))}
      </div>
    </>
  );
};

export default Movies;
