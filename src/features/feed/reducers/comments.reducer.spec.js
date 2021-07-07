import commentsReducer, { add } from "./comments.reducer";

describe("comments reducer", () => {
  const initialState = {
    comments: [],
  };

  it("should handle initial state", () => {
    expect(commentsReducer(undefined, { type: "unknown" })).toEqual({
      comments: [],
    });
  });

  it("should handle add", () => {
    const comments = [{ id: 1, body: "test" }];
    const actual = commentsReducer(initialState, add(comments));
    expect(actual.comments).toEqual(comments);
  });

  it("should not add duplicated comment", () => {
    const comment = { id: 1, body: "test" };
    const comments = [comment, comment];
    const actual = commentsReducer(initialState, add(comments));
    expect(actual.comments).toEqual([comment]);
  });
});
