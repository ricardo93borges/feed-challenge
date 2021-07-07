import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCommentsByPost } from "../../services/comments.service";
import { getPostById } from "../../services/post.service";
import { Comment } from "../comment/Comment";
import { add } from "../../reducers/comments.reducer";
import "./Post.css";

export function Post() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const localPosts = useSelector(({ posts }) => posts.posts);
  const localComments = useSelector(({ comments }) => comments.comments);

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getData() {
      const posts = await getPostById(id);
      setPost(posts);
    }

    if (localPosts.length === 0) {
      getData();
    } else {
      const localPost = localPosts.find((item) => item.id === parseInt(id, 10));
      setPost(localPost);
    }
  }, []);

  useEffect(() => {
    async function getData() {
      if (post) {
        const comments = await getCommentsByPost(post.id);
        setComments(comments);
        dispatch(add(comments));
      }
    }

    const postComments = localComments.filter(
      (item) => item.postId === parseInt(id, 10)
    );

    if (postComments.length === 0) {
      getData();
    } else {
      setComments(postComments);
    }
  }, [post]);

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
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
