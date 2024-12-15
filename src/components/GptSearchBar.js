const GptSearchBar = () => {
  return (
    <div className=" pt-[10%] justify-center flex">
      <form
        onClick={(e) => e.preventDefault()}
        className=" bg-black w-1/2 grid grid-cols-12 rounded-lg"
      >
        <input
          type="text"
          placeholder="What would you like to watch today?"
          className="col-span-9 m-2 p-4 rounded-md"
        />
        <button className="text-white m-2 p-4 bg-red-600 col-span-3 rounded-md">
          {" "}
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
