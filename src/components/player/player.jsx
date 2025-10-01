import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [likeCount, setLikeCount] = useState(() => {
    const stored = localStorage.getItem(`likeCount_${id}`);
    return stored ? parseInt(stored, 10) : 0;
  });
  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem(`isLiked_${id}`) === "true";
  });
  const [disLiked, setDisLiked] = useState(() => {
    return localStorage.getItem(`disLiked_${id}`) === "true";
  });
  const [data, setData] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3MWVmYWQ4ZDA5ZWIzMWY4YTg2ZTcwNGRhMzQ0MCIsIm5iZiI6MTc1OTEyNTg5My4zNDcwMDAxLCJzdWIiOiI2OGRhMjE4NTYyYjBhZTVmM2VlMWM5ZDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qBBUYb-bHbWNPgRvrTV0n5GaTuPP2fhcLjfHEYBR2e4",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setData(res.results[0]))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    localStorage.setItem(`likeCount_${id}`, likeCount.toString());
    localStorage.setItem(`isLiked_${id}`, isLiked.toString());
    localStorage.setItem(`disLiked_${id}`, disLiked.toString());
  }, [likeCount, isLiked, disLiked, id]);

  const previous = () => navigate(-1);

  const increment = () => {
    if (!isLiked) {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);
      if (disLiked) setDisLiked(false);
    } else {
      setLikeCount((prev) => (prev > 0 ? prev - 1 : 0));
      setIsLiked(false);
    }
  };

  const decrement = () => {
    if (!disLiked) {
      if (isLiked) setLikeCount((prev) => (prev > 0 ? prev - 1 : 0));
      setDisLiked(true);
      setIsLiked(false);
    } else {
      setDisLiked(false);
    }
  };

  if (!data) {
    return <div className="text-white text-center mt-10">Loading video...</div>;
  }

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-black text-white p-2 sm:p-0">
      <i
        className="fa-solid fa-arrow-left absolute top-5 left-3 text-sm sm:text-3xl hover:bg-gray-700 rounded cursor-pointer transition duration-200 ease-in"
        onClick={previous}
      ></i>

      <iframe
        className="rounded-lg shadow-lg video w-full sm:w-4/5 h-64 sm:h-[80%]"
        src={`https://www.youtube.com/embed/${data.key}`}
        frameBorder="0"
        title={data.name}
      ></iframe>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 text-center w-full sm:w-[80vw] gap-2 sm:gap-0">
        <h1 className="text-lg sm:text-2xl font-semibold">{data.name}</h1>
        <p className="text-sm opacity-70">{data.published_at?.slice(0, 10)}</p>
        <p className="text-sm">{data.type}</p>
      </div>

      <div className="w-full sm:w-[80vw] flex flex-row gap-4 sm:gap-8 mt-7 justify-start items-center">
        <button
          onClick={increment}
          className="flex items-center justify-center"
        >
          <i
            className={`fa-${
              isLiked ? "solid" : "regular"
            } fa-thumbs-up text-2xl`}
          ></i>
        </button>
        <p>{likeCount}</p>

        <button
          onClick={decrement}
          className="flex items-center justify-center"
        >
          <i
            className={`fa-${
              disLiked ? "solid" : "regular"
            } fa-thumbs-down text-2xl`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Player;
