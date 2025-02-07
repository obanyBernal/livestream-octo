import { useState } from "react";
import "../../App.css";
import "./LiveStreamPrototype.css";
import logo from "@assets/images/logo-guate.png";
import fotoDifunto from "@assets/images/daniela.jpeg";
import CommentsSection from "../Comments/CommentsSection";
import PropTypes from "prop-types";


export default function LiveStreamPrototype({ userName }) {
  //const [userName] = useState("Juan Pérez"); // Simula el nombre del usuario logueado
  const [comments, setComments] = useState([]);

  const handleAddComment = (content) => {
    const timestamp = new Date().toLocaleString(); // Obtén la fecha y hora actual
    const newComment = { userName, content, timestamp };
    setComments([...comments, newComment]);
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
            allow="autoplay; encrypted-media;" /*clipboard-write; picture-in-picture;web-share*/
            allowFullScreen={true}
          ></iframe>
        </div>

        {/* Información del Difunto */}
        <div className="info-difunto">
          <img
            src={fotoDifunto}
            alt="Foto del Difunto"
            className="foto-difunto"
          />
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
      <CommentsSection comments={comments} onAddComment={handleAddComment} />
    </div>
  );
}

LiveStreamPrototype.propTypes = {
  userName: PropTypes.string.isRequired, // userName debe ser una cadena de texto obligatoria
};
