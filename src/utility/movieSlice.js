import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    clearMovies: (state, action) => {
      state.nowPlayingMovies = null;
    },
  },
});

export const { addNowPlayingMovies, clearMovies } = movieSlice.actions;
export default movieSlice.reducer;
