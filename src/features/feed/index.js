import { useEffect, useState } from "react";
import { PostCard } from "./components/post-card/PostCard";
import { getPosts } from "./services/post.service";
import "./style.css";

export function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getData() {
      const posts = await getPosts();
      setPosts(posts);
    }

    getData();
  }, []);

  return (
    <div className="feed">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
