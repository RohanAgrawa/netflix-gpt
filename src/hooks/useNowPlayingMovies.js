import { useEffect } from "react";
import { API_OPTIONS } from "../utility/Constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utility/movieSlice";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMoview = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const movies = await data.json();
    dispatch(addNowPlayingMovies(movies.results));
  };
  useEffect(() => {
    nowPlayingMoview();
  }, []);
};
