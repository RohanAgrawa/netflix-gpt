import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleGpt } from "../utility/gptSlice";

const NavBar = () => {
  const location = useLocation();
  const isGptgpt = useSelector((store) => store.gptSearch?.isGpt);
  const dispatch = useDispatch();

  const pathMatchCSS =
    "text-white cursor-pointer text-xs md:text-xl px-1 md:px-2";
  const handleHomeClick = () => {
    dispatch(toggleGpt());
  };
  return (
    <div className="md:relative flex p-1 md:p-4 text-gray-400">
      <button
        disabled={!isGptgpt}
        onClick={handleHomeClick}
        className={
          location.pathname === "/browse" && !isGptgpt
            ? pathMatchCSS
            : "cursor-pointer text-xs md:text-xl px-1 md:px-2"
        }
      >
        Home
      </button>
      <button
        className={
          location.pathname === "/shows"
            ? pathMatchCSS
            : "cursor-pointer text-xs md:text-xl px-1 md:px-2"
        }
      >
        TV Shows
      </button>
      <button
        className={
          location.pathname === "/movies"
            ? pathMatchCSS
            : "cursor-pointer text-xs md:text-xl px-1 md:px-2"
        }
      >
        Movies
      </button>
      <button
        className={
          location.pathname === "/recentAdded"
            ? pathMatchCSS
            : "cursor-pointer text-xs md:text-xl px-1 md:px-2"
        }
      >
        Recently Added
      </button>
      <button
        className={
          location.pathname === "/myList"
            ? pathMatchCSS
            : "cursor-pointer text-xs md:text-xl px-1 md:px-2"
        }
      >
        My List
      </button>
    </div>
  );
};
export default NavBar;
