import { LOGIN_BG } from "../utility/constant";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <img src={LOGIN_BG} alt="background" className="fixed -z-10" />
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
