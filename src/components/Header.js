import { useDispatch, useSelector } from "react-redux";
import MenuProfile from "./MenuProfile";
import { LOGO, SUPPORTED_LANGUAGES } from "../utility/constant";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { toggleGpt } from "../utility/gptSlice";
import { updateLanguage } from "../utility/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const isGptgpt = useSelector((store) => store.gptSearch?.isGpt);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      navigate("/browse");
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  const handleGptSearch = () => {
    dispatch(toggleGpt());
  };

  const handleLanguageEvent = (e) => {
    dispatch(updateLanguage(e.target.value));
  };
  return (
    <div className="absolute px-2 md:px-4 py-1 md:py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between">
      <div className="flex">
        <img src={LOGO} alt="logo" className="w-10 md:w-44"></img>
        {user && <NavBar />}
      </div>

      {user && (
        <div className="md:px-4">
          <div className="flex justify-end">
            {!isGptgpt && (
              <button className="text-white md:mr-5" onClick={handleGptSearch}>
                <span className="flex">
                  <p className="text-xs md:text-xl">GPT</p>{" "}
                  <svg
                    className="w-3 md:w-4 h-4 md:h-5 md:mt-1 ml-1 md:ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </span>
              </button>
            )}

            {isGptgpt && (
              <select
                className="bg-purple-300 md:px-2 py-0 rounded-md mr-3 text-xs"
                onChange={handleLanguageEvent}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <MenuProfile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
