import React, { useState } from "react";
import LiveStreamPrototype from "./LiveStreamPrototype.jsx";
import logo from "../assets/logo-guate.png";
import "./LoginScreen.css";



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Controla si se muestra el login o el LiveStream

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    chapel: "Capilla la Inspiración",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Simula el inicio de sesión exitoso
    setIsLoggedIn(true);
  };

  // Si está logueado, muestra el componente LiveStreamPrototype
  if (isLoggedIn) {
    return <LiveStreamPrototype />;
  }

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="login-logo-image" />;
      <h1 className="login-title">Acceso al Sistema</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="chapel" className="label">
          Selecciona una Capilla:
        </label>
        <select
          id="chapel"
          name="chapel"
          value={formData.chapel}
          onChange={handleInputChange}
          className="login-input"
        >
          <option value="Capilla la Inspiración">Capilla la Inspiración</option>
          <option value="Capilla la Gloria">Capilla la Gloria</option>
          <option value="Capilla El Eden">Capilla El Eden</option>
          <option value="Capilla la Ascensión">Capilla la Ascensión</option>
        </select>

        <label htmlFor="name" className="login-label">
          Nombre Completo:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="login-input"
          required
        />

        <label htmlFor="email" className="login-label">
          Correo Electrónico (Opcional):
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="login-input"
        />

        <label htmlFor="phone" className="login-label">
          Número de Teléfono (Opcional):
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="login-input"
        />

        <label htmlFor="password" className="login-label">
          Contraseña (Opcional):
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="login-input"
        />

        <button type="submit" className="login-button ">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
