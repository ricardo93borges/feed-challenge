import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../../services/post.service";
import "./Post.css";

export function Post() {
  let { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getData() {
      const posts = await getPostById(id);
      setPost(posts);
    }

    getData();
  }, []);

  return (
    <div className="post">
      {!post && <p>post not found</p>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <article>{post.body}</article>
        </div>
      )}
      <h3>Comments</h3>
    </div>
  );
}
