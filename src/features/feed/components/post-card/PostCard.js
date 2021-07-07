import { Link } from "react-router-dom";
import "./PostCard.css";

export function PostCard({ post }) {
  return (
    <div className="post-card">
      <h2>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
    </div>
  );
}
