import "./Sidebar.css";
import PropTypes from "prop-types";
import { useState } from "react";
import logo from "@assets/images/guate-white.png";

export default function Sidebar({ menuItems, onMenuClick }) {
  const [activeItem, setActiveItem] = useState(""); // Estado para el botón seleccionado

  const handleItemClick = (id) => {
    setActiveItem(id);
    onMenuClick(id);
  };

  return (
    <div className="sidebar">
     <img src={logo} alt="Logo" className="sidebar-logo" /> 
      {/*<h2 className="sidebar-title">Menú</h2>*/}
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`menu-item ${activeItem === item.id ? "active" : ""}`} // Clase activa
            onClick={() => handleItemClick(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

Sidebar.propTypes = {
  menuItems: PropTypes.array.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};
