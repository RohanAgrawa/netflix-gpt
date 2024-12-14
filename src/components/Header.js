import { useSelector } from "react-redux";
import MenuProfile from "./MenuProfile";
import { LOGO } from "../utility/constant";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/browse");
    } else {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <div className="flex">
        <img src={LOGO} alt="logo" className="w-44"></img>
        <NavBar />
      </div>

      {user && <MenuProfile />}
    </div>
  );
};

export default Header;
