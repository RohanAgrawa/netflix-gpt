import { useSelector } from "react-redux";
import { YOUTUBE_URL } from "../utility/constant";

const VideoBackground = () => {
  const trailer = useSelector((store) => store.movies.trailer);
  if (!trailer) {
    return;
  }
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={YOUTUBE_URL + trailer.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="autoplay;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
