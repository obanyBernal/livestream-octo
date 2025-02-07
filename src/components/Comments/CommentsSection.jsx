import { useState } from "react";
import Comment from "./Comments";
import PropTypes from "prop-types";
import "./CommentsSection.css";

export default function CommentsSection({ comments, onAddComment }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    if (newComment.trim() !== "") {
      onAddComment(newComment); // Pasa el contenido al componente padre
      setNewComment("");
    }
  };

  return (
    <div className="comments-section">
      <h2 className="comments-title">Pésames</h2>
      <p>En esta sección puedes escribir tu pésame para la familia doliente</p>
      <div className="comment-input">
        <input
          type="text"
          placeholder="Escribe tu pésame"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="input"
        />
        <button onClick={handleSubmit} className="button">
          Enviar
        </button>
      </div>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            userName={comment.userName}
            content={comment.content}
            timestamp={comment.timestamp}
          />
        ))}
      </div>
    </div>
  );
}
// Validación de Props
CommentsSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      timestamp: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddComment: PropTypes.func.isRequired,
};
