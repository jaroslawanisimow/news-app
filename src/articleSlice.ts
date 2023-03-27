import { createSlice } from "@reduxjs/toolkit";

export interface ArticlesState {
  data: any[];
}

const initialState: ArticlesState = {
  data: [],
};

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    load: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { load } = articleSlice.actions;

export default articleSlice.reducer;
