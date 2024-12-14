import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const pathMatchCSS = "text-white cursor-pointer px-2";
  return (
    <div className="relative flex p-4 text-gray-400">
      <p
        className={
          location.pathname === "/browse" ? pathMatchCSS : "cursor-pointer px-2"
        }
      >
        Home
      </p>
      <p
        className={
          location.pathname === "/shows" ? pathMatchCSS : "cursor-pointer px-2"
        }
      >
        TV Shows
      </p>
      <p
        className={
          location.pathname === "/movies" ? pathMatchCSS : "cursor-pointer px-2"
        }
      >
        Movies
      </p>
      <p
        className={
          location.pathname === "/recentAdded"
            ? pathMatchCSS
            : "cursor-pointer px-2"
        }
      >
        Recently Added
      </p>
      <p
        className={
          location.pathname === "/myList" ? pathMatchCSS : "cursor-pointer px-2"
        }
      >
        My List
      </p>
    </div>
  );
};
export default NavBar;
