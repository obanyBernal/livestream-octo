//import React from "react";
import PropTypes from "prop-types";
import "./AdminHeader.css";

export default function AdminHeader({ userName, onLogout }) {
  return (
    <header className="admin-header">
      <div className="admin-header-left">
        <h1 className="admin-title">SISTEMA DE GESTION</h1>
      </div>
      <div className="admin-header-right">
        <p className="admin-user">
          Bienvenido, <span>{userName}</span>
        </p>
        <button className="logout-button" onClick={onLogout}>
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
}

AdminHeader.propTypes = {
  userName: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
