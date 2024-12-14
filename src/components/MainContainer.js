import { useGetTrailer } from "../hooks/useGetTrailer";
import { useNowPlayingMovieInfo } from "../hooks/useNowPlayingMovieInfo";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movie = useNowPlayingMovieInfo();
  useGetTrailer(movie?.id);
  return (
    <div>
      <VideoTitle title={movie?.original_title} description={movie?.overview} />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
