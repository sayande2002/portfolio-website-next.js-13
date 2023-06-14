"use client";
import { createSlice } from "@reduxjs/toolkit";
type Theme = {
  value: boolean | null;
};

const storedValue = localStorage.getItem("dark-mode");

const initialState: Theme = {
  value: storedValue !== null ? JSON.parse(storedValue) : null,
};
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    dark: (state) => {
      state.value = !state.value;
    },
  },
});
export const { dark } = themeSlice.actions;
export default themeSlice.reducer;
