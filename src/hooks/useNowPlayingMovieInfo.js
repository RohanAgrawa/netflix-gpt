import { useSelector } from "react-redux";

export const useNowPlayingMovieInfo = () => {
  const movies = useSelector((store) => store?.movies?.moviesList);
  const nowPlayingMovies = movies?.filter((movie) => movie?.nowPlaying)[0]
    ?.nowPlaying;

  const randomNowPlayingMovie = Math.floor(
    Math.random() * nowPlayingMovies?.length
  );

  const movie = nowPlayingMovies
    ? nowPlayingMovies[randomNowPlayingMovie]
    : null;
  return movie;
};
