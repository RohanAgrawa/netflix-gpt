import { useSelector } from "react-redux";
import MenuProfile from "./MenuProfile";
import { LOGO } from "../utility/Constant";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="absolute p-4 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img src={LOGO} alt="logo" className="w-44"></img>

      {user && <MenuProfile />}
    </div>
  );
};

export default Header;
