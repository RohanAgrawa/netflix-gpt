import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    isGpt: false,
  },
  reducers: {
    toggleGpt: (state, action) => {
      state.isGpt = !state.isGpt;
    },
    clearGptToggle: (state, action) => {
      state.isGpt = false;
    },
  },
});

export const { toggleGpt, clearGptToggle } = gptSlice.actions;

export default gptSlice.reducer;
