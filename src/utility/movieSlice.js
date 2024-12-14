import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.moviesList.push({ nowPlaying: action.payload });
    },
    addPopularMovies: (state, action) => {
      state.moviesList.push({ popular: action.payload });
    },
    addTrendingMovies: (state, action) => {
      state.moviesList.push({ trending: action.payload });
    },
    addTopRatedMovies: (state, action) => {
      state.moviesList.push({ topRated: action.payload });
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    clearMovies: (state, action) => {
      state.moviesList = [];
      state.trailer = null;
    },
  },
});

export const {
  addNowPlayingMovies,
  clearMovies,
  addTrailer,
  addPopularMovies,
  addTrendingMovies,
  addTopRatedMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
