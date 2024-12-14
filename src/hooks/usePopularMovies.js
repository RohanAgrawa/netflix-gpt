import { useEffect } from "react";
import { API_OPTIONS } from "../utility/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utility/movieSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMoview = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const movies = await data.json();
    dispatch(addPopularMovies(movies.results));
  };
  useEffect(() => {
    popularMoview();
  }, []);
};
