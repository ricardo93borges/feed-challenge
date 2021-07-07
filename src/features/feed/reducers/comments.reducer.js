import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    add: (state, action) => {
      const localComments = [...state.comments];

      action.payload.forEach((comment) => {
        const exists = localComments.findIndex(
          (item) => item.id === comment.id
        );
        if (exists === -1) {
          localComments.push(comment);
        }
      });

      state.comments = localComments;
    },
  },
});

export const { add } = commentsSlice.actions;

export default commentsSlice.reducer;
