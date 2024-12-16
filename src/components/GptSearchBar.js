import { useRef, useState } from "react";
import { API_OPTIONS } from "../utility/constant";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResults, clearGptResults } from "../utility/gptSlice";
import lang from "../utility/langaugeContants";

const GptSearchBar = () => {
  const gptSearchText = useRef(null);
  const [validateMessage, setValidateMessage] = useState(null);
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.config.lang);

  const fetchMovies = async (title) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + title,
      API_OPTIONS
    );
    const movie = await data.json();
    return movie.results;
  };

  const handleGptSearch = async () => {
    let input = "Funny comedy indian movies";
    const movieNames = ["Andaz Apna Apna", "Hera pheri", "De Dana dan"];

    if (gptSearchText.current.value !== input) {
      dispatch(clearGptResults());
      setValidateMessage("No search result availble for the provided input.");
      return;
    }

    const data = movieNames.map((movie) => {
      return fetchMovies(movie);
    });
    const movies = await Promise.all(data);

    const result = movieNames.map((names, index) => {
      return { [names]: movies[index] };
    });
    setValidateMessage(null);
    dispatch(addGptMovieResults({ movieResults: result }));
  };
  return (
    <>
      <div className="pt-[50%] md:pt-[10%] justify-center flex">
        <form
          onClick={(e) => e.preventDefault()}
          className=" bg-black w-full md:w-1/2 grid grid-cols-12 rounded-lg"
        >
          <input
            ref={gptSearchText}
            type="text"
            placeholder={lang[selectedLang].gptSearchPlaceholder}
            className="col-span-9 m-2 p-4 rounded-md"
          />
          <button
            className="text-white m-2 p-4 bg-red-600 col-span-3 rounded-md"
            onClick={handleGptSearch}
          >
            {lang[selectedLang].search}
          </button>
        </form>
      </div>{" "}
      {validateMessage && (
        <div className=" justify-center flex">
          <p className="text-xl text-red-400 w-full md:w-1/2 justify-center flex p-2 bg-black rounded-lg">
            {validateMessage}
          </p>
        </div>
      )}
    </>
  );
};

export default GptSearchBar;
