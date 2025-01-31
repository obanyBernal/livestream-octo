import { useState } from "react";
import "../App.css";

export default function LiveStreamPrototype() {
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/ylqyk1wbCzQ?si=Tv8H2ibd9L53RBqj");
  const [customUrl, setCustomUrl] = useState("");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleSetUrl = () => {
    if (customUrl.trim() !== "") {
      setVideoUrl(customUrl);
    }
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Transmisión en Vivo</h1>
      <div className="content">
        {/* Sección del Video */}
        <div className="video-container">
          <iframe
            className="video-frame"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Sección de Comentarios */}
        <div className="comments-section">
          <h2 className="comments-title">Comentarios</h2>
          <div className="comment-input">
            <input
              type="text"
              placeholder="Escribe tu pésame"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="input"
            />
            <button onClick={handleAddComment} className="button">
              Enviar
            </button>
          </div>
          <div className="comments-list">
            {comments.map((comment, index) => (
              <p key={index} className="comment">{comment}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
