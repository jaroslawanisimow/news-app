import { createSlice } from "@reduxjs/toolkit";

export interface SettingsState {
  view: string;
}

const initialState: SettingsState = {
    view: "list",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.view = state.view === "list" ? "grid" : "list";
    },
  },
});

export const { toggleView } = settingsSlice.actions;

export default settingsSlice.reducer; 
