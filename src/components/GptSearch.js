import { LOGIN_BG } from "../utility/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="">
      <img
        src={LOGIN_BG}
        alt="background"
        className="w-screen h-screen fixed -z-10 object-cover"
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
