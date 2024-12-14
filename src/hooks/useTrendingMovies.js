import { useEffect } from "react";
import { API_OPTIONS } from "../utility/constant";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utility/movieSlice";

export const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const trendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      API_OPTIONS
    );

    const movies = await data.json();
    dispatch(addTrendingMovies(movies.results));
  };
  useEffect(() => {
    trendingMovies();
  }, []);
};
