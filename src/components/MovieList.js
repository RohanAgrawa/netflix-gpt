import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  const key = Object.keys(movies)[0];
  const title = key
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="px-1 md:px-6">
      <h1 className="text-xl md:text-3xl py-2 md:py-4  text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <div className="flex ">
          {movies[key].map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
