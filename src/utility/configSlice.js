import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    updateLanguage: (state, action) => {
      state.lang = action.payload;
    },
    clearLanguage: (state, action) => {
      state.lang = {
        lang: "en",
      };
    },
  },
});

export const { updateLanguage, clearLanguage } = configSlice.actions;
export default configSlice.reducer;
