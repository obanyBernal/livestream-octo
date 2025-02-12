//import React from "react";
import PropTypes from "prop-types";
import "./TransmissionCard.css";

export default function TransmissionCard({ name, status }) {
  return (
    <li className="transmission-card">
      <span className="transmission-name">{name}</span>
      <div className="status-container">
        <div className={`status-indicator ${status.toLowerCase()}`}></div>
        <span className="status-text">{status}</span>
      </div>
    </li>
  );
}

TransmissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["Online", "Offline"]).isRequired,
};
