import { useEffect } from "react";
import { API_OPTIONS } from "../utility/constant";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utility/movieSlice";

export const useGetTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const clips = await data.json();

    const trailers = clips.results.filter((clip) => clip.type === "Trailer");

    const trailer = !trailers
      ? clips[0]
      : trailers[Math.floor(Math.random() * trailers?.length)];
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    if (movieId) {
      getMovieTrailer();
    }
  }, [movieId]);
};
