import { configureStore } from "@reduxjs/toolkit";
// import articleSlice from "./articleSlice";
// import settingsSlice from "./settingsSlice";
import articles from "./articleSlice";
import settings from "./settingsSlice";

export const store = configureStore({
  reducer: { articles, settings },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
