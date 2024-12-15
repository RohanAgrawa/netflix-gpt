import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  const isGpt = useSelector((store) => store.gptSearch?.isGpt);
  useTrendingMovies();
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {isGpt && <GptSearch />}
      {!isGpt && (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
