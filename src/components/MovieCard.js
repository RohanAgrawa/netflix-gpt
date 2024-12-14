import { POSTER_PATH } from "../utility/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-2 cursor-pointer">
      <img
        src={POSTER_PATH + posterPath}
        alt="Movie Poster"
        className="rounded-md"
      />
    </div>
  );
};
export default MovieCard;
