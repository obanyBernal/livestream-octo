import { useState } from "react";
import "../App.css";
import logo from "../assets/logo-guate.png";
import difuntoImage from "../assets/daniela.jpeg"; // Asegúrate de tener la imagen

export default function LiveStreamPrototype() {
  const [videoUrl] = useState("https://www.facebook.com/share/v/1H53nVuA6w/");
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="live-logo-image" />
      <h1 className="title">Velación Online Capilla La Gloria</h1>
      <div className="content">
        {/* Video */}
        <div className="video-container">
          <iframe
            className="video-frame"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Información del difunto */}
        <div className="info-difunto">
          <img src={difuntoImage} alt="Difunto" className="foto-difunto" />
          <h2 className="nombre-difunto">Daniela Ruben</h2>
          <p className="datos-difunto">
            Nació: 12 de marzo de 1950<br />
            Falleció: 29 de enero de 2025<br />
            Siempre en nuestros corazones.<br />
            Capilla La Gloria.
          </p>
        </div>

        {/* Comentarios */}
        <div className="comments-section">
          <h2 className="comments-title">Comentarios</h2>
          <p>Aqui puedes dejar tu pesame para la familia</p>
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
