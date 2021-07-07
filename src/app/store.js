import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../features/feed/reducers/comments.reducer";
import postsReducer from "../features/feed/reducers/posts.reducer";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
});
