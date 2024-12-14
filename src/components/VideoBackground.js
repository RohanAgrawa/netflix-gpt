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
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>

    // <div className="w-screen h-screen overflow-hidden relative">
    //   <iframe
    //     className="absolute zoom top-1/2 left-1/2 w-screen h-[56.25vw] -translate-x-1/2 -translate-y-1/2"
    //     src={YOUTUBE_URL + trailer.key + "?&autoplay=1&mute=1"}
    //     title="YouTube video player"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     referrerPolicy="strict-origin-when-cross-origin"
    //   ></iframe>
    // </div>
  );
};

export default VideoBackground;
