import { useState } from "react";
import iconEdit from "@assets/icons/edit.svg";
import PropTypes from "prop-types";
import "./TransmissionCard.css";

export default function TransmissionCard({ name, status: initialStatus }) {
  const [expanded, setExpanded] = useState(false);
  const [url, setUrl] = useState("https://mi-transmision.com/ejemplo"); // URL inicial
  const [isEditing, setIsEditing] = useState(false); // Estado de edición
  const [status, setStatus] = useState(initialStatus); // Estado del botón y label

  const handleEditClick = (event) => {
    event.stopPropagation();
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  // Alternar entre Online y Offline
  const toggleStatus = () => {
    setStatus((prevStatus) => (prevStatus === "Online" ? "Offline" : "Online"));
  };

  return (
    <li
      className={`transmission-card ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="transmission-header">
        <span className="transmission-name">{name}</span>
        <div className="status-container">
          <div className={`status-indicator ${status.toLowerCase()}`}></div>
          <span className="status-text">{status}</span>
        </div>
      </div>

      {/* Contenido expandido al hacer clic */}
      {expanded && (
        <div className="transmission-details" onClick={(event) => event.stopPropagation()}>
          <div className="url-container">
            <label>URL</label>
            <div className="url-input-container">
              <input
                type="text"
                value={url}
                disabled={!isEditing}
                onChange={(e) => setUrl(e.target.value)}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
              />
              <button className="edit-button" onClick={handleEditClick}>
                <img src={iconEdit} alt="Editar" className="edit-button-img"/>
              </button>
            </div>
          </div>
          
          <div className="access-container">
            <label>CLAVE DE ACCESO:</label>
            <span className="access-key">GUATEMALA-WIS@5FDSF</span>
            <button className="copy-button">COPIAR</button>
          </div>

          <label>Nombre de Difunto</label>
          <input type="text" placeholder="Ingrese el nombre" onClick={(event) => event.stopPropagation()}/>

          <label>Fecha de defunción</label>
          <input type="date" onClick={(event) => event.stopPropagation()}/>

          <div className="inhumation-container">
            <label>Datos de inhumación</label>
            <textarea placeholder="Ingrese detalles"></textarea>
          </div>

          <div className="file-container">
            <label>Foto de Difunto</label>
            <label className="custom-file-button">
              Seleccionar archivo
              <input type="file" onClick={(event) => event.stopPropagation()}/>
            </label>
          </div>

          <div className="actions">
            <button className={`offline-button ${status.toLowerCase()}`} onClick={toggleStatus}>
              {status === "Online" ? "OFFLINE" : "ONLINE"}
            </button>
            <button className="save-button">GUARDAR</button>
          </div>
        </div>
      )}
    </li>
  );
}

TransmissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["Online", "Offline"]).isRequired,
};
