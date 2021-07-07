import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    set: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { set } = postsSlice.actions;

export default postsSlice.reducer;
