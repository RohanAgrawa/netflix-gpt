import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    isGpt: false,
    movieResults: null,
  },
  reducers: {
    toggleGpt: (state, action) => {
      state.isGpt = !state.isGpt;
    },
    addGptMovieResults: (state, action) => {
      state.movieResults = action.payload.movieResults;
    },
    clearGptToggle: (state, action) => {
      state.isGpt = false;
    },
    clearGptResults: (state, action) => {
      state.movieResults = null;
    },
  },
});

export const {
  toggleGpt,
  clearGptToggle,
  addGptMovieResults,
  clearGptResults,
} = gptSlice.actions;

export default gptSlice.reducer;
