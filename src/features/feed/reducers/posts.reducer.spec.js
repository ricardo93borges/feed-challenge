import postsReducer, { set } from "./posts.reducer";

describe("posts reducer", () => {
  const initialState = {
    posts: [],
  };
  it("should handle initial state", () => {
    expect(postsReducer(undefined, { type: "unknown" })).toEqual({
      posts: [],
    });
  });

  it("should handle set", () => {
    const posts = [{ id: 1, title: "test" }];
    const actual = postsReducer(initialState, set(posts));
    expect(actual.posts).toEqual(posts);
  });
});
