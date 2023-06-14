"use client";
import { createSlice } from "@reduxjs/toolkit";
type Breakpoint = {
  breakpoint: number;
};

const initialState: Breakpoint = { breakpoint: 1600 };
export const windowSlice = createSlice({
  name: "window",
  initialState,
  reducers: {
    resize: (state, actions) => {
      state.breakpoint = actions.payload;
    },
  },
});
export const { resize } = windowSlice.actions;
export default windowSlice.reducer;
