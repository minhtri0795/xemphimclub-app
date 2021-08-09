import React from "react";

function Comment({ comment }) {
  return (
    <div className="media">
      <div className="media-content">
        <div className="content">
          <strong>{comment.name}</strong>
          <small>{comment.date}</small>
          <div className="comment">{comment.content}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
