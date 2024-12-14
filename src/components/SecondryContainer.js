import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store?.movies?.moviesList);
  if (!moviesList) {
    return;
  }
  return (
    <div className="bg-black">
      <div className="-mt-48 pl-6 relative z-20">
        {moviesList.map((movies, index) => (
          <MovieList key={index} movies={movies} />
        ))}
      </div>
    </div>
  );
};
export default SecondaryContainer;
