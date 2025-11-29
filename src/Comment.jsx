import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@yuvraj",
      remark: "Great job",
      rating: 5,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComment) => [...currComment, comment]);
  };
  return (
    <>
      <h4>All Comments!</h4>
      {comments.map((comment, idx) => (
        <div className="comment" key={idx}>
          <span>{comment.remark}</span>
          &nbsp; &nbsp;
          <span>(rating : {comment.rating}) </span>
          <br />
          <span>- {comment.username} </span>
        </div>
      ))}

      <hr />

      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
