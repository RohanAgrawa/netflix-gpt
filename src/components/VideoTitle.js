const VideoTitle = ({ title, description }) => {
  return (
    <div className="pt-[20%] aspect-video px-24 w-screen absolute text-gray-100 bg-gradient-to-r from-black">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/4">{description}</p>
      <div className="">
        <button className=" bg-white text-black cursor-pointer py-2 px-8 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 cursor-pointer text-white py-2 px-8 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
