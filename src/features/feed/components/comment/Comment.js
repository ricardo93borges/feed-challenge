import "./Comment.css";

export function Comment({ comment }) {
  return (
    <div className="comment">
      <p>
        <b>
          {comment.name} {comment.id}
        </b>
      </p>
      <p>{comment.body}</p>
    </div>
  );
}
