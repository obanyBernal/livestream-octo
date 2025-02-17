import { useState } from "react";
import logo from "@assets/images/logo-guate.png";
import "../../App.css";
import "./LoginScreen.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function LoginScreen({ onLogin }) {
  const navigate = useNavigate(); // Hook para redirigir
  const superAdminCredentials = {
    email: "alice@ymail.com",
    password: "3507",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    /*phone: "",*/
    password: "",
    chapel: "Capilla la Inspiración",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === "") {
      alert("Por favor, completa tu nombre antes de continuar.");
      return;
    }

    // Verifica si las credenciales coinciden con el super administrador
    if (
      formData.email === superAdminCredentials.email &&
      formData.password === superAdminCredentials.password
    ) {
      navigate("/admin"); // Redirige a la página de administración
    } else {
      // Si no es super admin, inicia sesión como usuario normal
      onLogin(formData.name); // Actualiza el estado en el componente padre
      navigate("/livestream"); // Redirige al LiveStreamPrototype
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="login-logo-image" />
      <h1 className="login-title">Acceso a Capillas Virtuales</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="chapel" className="login-label">
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

        {/*<label htmlFor="phone" className="login-label">
          Número de Teléfono (Opcional):
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="login-input"
        />*/}

        <label htmlFor="password" className="login-label">
          Contraseña (proporcionada por tu asesor):
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="login-input"
          required
        />

        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

LoginScreen.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
