import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import LiveStreamPrototype from "./components/LiveStream/LiveStreamPrototype";
import AdminPage from "./components/admin/AdminPage";

function App() {
  const [userName, setUserName] = useState(""); // Almacena el nombre del usuario

  const handleLogin = (name) => {
    setUserName(name); // Actualiza el nombre del usuario
  };

  return (
    <Router>
      <Routes>
        {/* Ruta para el Login */}
        <Route
          path="/"
          element={<LoginScreen onLogin={handleLogin} />}
        />
        {/* Ruta para la transmisión */}
        <Route
          path="/livestream"
          element={<LiveStreamPrototype userName={userName} />}
        />
        {/* Ruta para la administración */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
