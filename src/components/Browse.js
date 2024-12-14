import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovies();
  return <Header></Header>;
};

export default Browse;
