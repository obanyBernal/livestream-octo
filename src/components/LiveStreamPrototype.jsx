import { useState } from "react";
import "../App.css";
import logo from "../assets/logo-guate.png";
import fotoDifunto from "../assets/daniela.jpeg";

export default function LiveStreamPrototype() {
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
        {/* Sección del Video */}
        <div className="video-container">
          <iframe
            className="video-frame"
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FSquadgamergdl%2Fvideos%2F1671797887086797%2F&show_text=false&width=560&t=0"
            //width="560"
           // height="314"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; encrypted-media;"/*clipboard-write; picture-in-picture;web-share*/
            allowFullScreen={true}
          ></iframe>
        </div>

        {/* Información del Difunto */}
        <div className="info-difunto">
          <img src={fotoDifunto} alt="Foto del Difunto" className="foto-difunto" />
          <h2 className="nombre-difunto">Daniela Ruben</h2>
          <p className="datos-difunto">
            Nació: 12 de marzo de 1950 <br />
            Falleció: 29 de enero de 2025 <br />
            Siempre en nuestros corazones. <br />
            Capilla La Gloria.
          </p>
        </div>
      </div>

      {/* Sección de Comentarios */}
      <div className="comments-section">
        <h2 className="comments-title">Pesames</h2>
        <p>En esta sección puedes escribir tu pésame para la familia doliente</p>
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
  );
}
