//import React from "react";
import PropTypes from "prop-types";
import "./Comments.css";

export default function Comment({ userName, content, timestamp }) {
  return (
    <div className="comment">
      <p className="comment-user">{userName}</p>
      <p className="comment-content">{content}</p>
      <p className="comment-timestamp">{timestamp}</p>
    </div>
  );
}

Comment.propTypes = {
  userName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};
