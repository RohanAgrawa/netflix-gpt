import { POSTER_PATH } from "../utility/constant";

const MovieCard = ({ posterPath, movie }) => {
  return (
    <div className="w-48 pr-2 cursor-pointer group relative">
      <img
        src={POSTER_PATH + posterPath}
        alt="Movie Poster"
        className="rounded-md"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 rounded-lg p-4 opacity-0 group-hover:opacity-100 transform group-hover:scale-105 transition-all duration-300 ease-in-out">
        <h3 className="text-white text-md font-bold mt-24">
          {movie.original_title}
        </h3>
        <div className="flex">
          <p className="text-white text-xs pl-1">
            {"⭐ " + movie.vote_average}
          </p>
          <p className="text-white text-xs pl-1">{"| " + movie.release_date}</p>
        </div>
        <button className="mt-4 px-8 py-2  bg-red-600 text-white text-sm rounded shadow hover:bg-red-700">
          Play
        </button>
      </div>
    </div>
  );
};
export default MovieCard;
