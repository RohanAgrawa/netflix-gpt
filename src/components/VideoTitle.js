const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[30%] md:pt-[20%] aspect-video px-5 md:px-24 w-screen absolute text-gray-100 ">
      <h1 className="text-xs md:text-2xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/4 hidden md:inline-block">{description}</p>
      <div className="mt-1 md:mt-0">
        <button className=" bg-white text-black cursor-pointer py-1 md:py-2 px-2 md:px-8 md:text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 cursor-pointer text-white py-2 px-8 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
