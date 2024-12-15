import { useDispatch, useSelector } from "react-redux";
import MenuProfile from "./MenuProfile";
import { LOGO } from "../utility/constant";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { toggleGpt } from "../utility/gptSlice";

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
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <div className="flex">
        <img src={LOGO} alt="logo" className="w-44"></img>
        {user && <NavBar />}
      </div>

      {user && (
        <div className="px-4">
          {!isGptgpt && (
            <button className="text-white mr-5" onClick={handleGptSearch}>
              <span className="flex">
                <p className="text-xl">GPT</p>{" "}
                <svg
                  className="w-4 h-5 mt-1 ml-2"
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
          <MenuProfile />
        </div>
      )}
    </div>
  );
};

export default Header;
