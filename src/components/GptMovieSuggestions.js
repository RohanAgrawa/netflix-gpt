import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const movieResults = useSelector((store) => store.gptSearch.movieResults);

  if (!movieResults) {
    return;
  }

  return (
    <div className="bg-black opacity-90 rounded-lg m-2 p-4">
      {movieResults.map((movies, index) => (
        <MovieList key={index} movies={movies} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
