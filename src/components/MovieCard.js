import { POSTER_PATH } from "../utility/Constant";

const MovieCard = ({ posterPath, movie }) => {
  if (!posterPath) {
    return;
  }
  return (
    <div className="w-28 md:w-48 pr-2 cursor-pointer group relative">
      <img
        src={POSTER_PATH + posterPath}
        alt="Movie Poster"
        className="rounded-md"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 rounded-lg md:p-4 opacity-0 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-300 ease-in-out">
        <h3 className="text-white text-xs md:text-md font-bold mt-12 md:mt-24">
          {movie.original_title}
        </h3>
        <div className="flex">
          <p className="text-white text-xs md:text-xs md:pl-1">
            {"⭐" + movie.vote_average}
          </p>
          <p className="text-white text-xs md:text-xs md:pl-1">
            {"| " + movie.release_date}
          </p>
        </div>
        <button className="mt-1 md:mt-4 px-2 md:px-8 md:py-2  bg-red-600 text-white text-sm rounded shadow hover:bg-red-700">
          Play
        </button>
      </div>
    </div>
  );
};
export default MovieCard;
