import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "./components/post-card/PostCard";
import { set } from "./reducers/posts.reducer";
import { getPosts } from "./services/post.service";
import "./style.css";

export function Feed() {
  const dispatch = useDispatch();
  const localPosts = useSelector(({ posts }) => posts.posts);

  const [posts, setPosts] = useState(localPosts);

  useEffect(() => {
    async function getData() {
      const posts = await getPosts();
      setPosts(posts);
      dispatch(set(posts));
    }

    if (posts.length === 0) {
      getData();
    }
  }, []);

  return (
    <div className="feed">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
