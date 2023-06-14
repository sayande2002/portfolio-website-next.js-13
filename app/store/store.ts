"use client";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import windowReducer from "./slice/windowlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    window: windowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
