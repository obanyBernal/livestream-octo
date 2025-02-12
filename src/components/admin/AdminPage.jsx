import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import TransmissionList from "./TransmissionList";
import "./AdminPage.css";

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState("access");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirige al login
  };

  const menuItems = [
    { id: "access", name: "Administrar Accesos" },
    { id: "service", name: "Agregar Servicio" },
    { id: "users", name: "Administrar Usuarios" },
  ];
  const renderContent = () => {
    switch (activeSection) {
      case "access":
        return <TransmissionList />;
      case "service":
        return <div>Contenido de Agregar Servicio</div>;
      case "users":
        return <div>Contenido de Administrar Usuarios</div>;
      default:
        return <div>Selecciona una sección</div>;
    }
  };

  return (
    <div className="admin-page">
      <Sidebar menuItems={menuItems} onMenuClick={setActiveSection} />
      <div className="admin-main">
        <AdminHeader userName={"Super Administrador"} onLogout={handleLogout} />
        <div className="admin-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

