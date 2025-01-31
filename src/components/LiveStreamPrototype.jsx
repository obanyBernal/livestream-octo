import { useState } from "react";
import "../App.css"; // Importamos el archivo CSS

export default function LiveStreamPrototype() {
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/embed/LIVE_STREAM_ID");
  const [customUrl, setCustomUrl] = useState("");

  const handleSetUrl = () => {
    if (customUrl.trim() !== "") {
      setVideoUrl(customUrl);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Transmisión en Vivo</h1>
      <div className="video-container">
        <iframe
          className="video-frame"
          src={videoUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="controls">
        <input
          type="text"
          placeholder="Ingresa URL del video"
          value={customUrl}
          onChange={(e) => setCustomUrl(e.target.value)}
          className="input"
        />
        <button
          onClick={handleSetUrl}
          className="button"
        >
          Cargar Video
        </button>
      </div>
    </div>
  );
}
