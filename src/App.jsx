
import { useState } from "react";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import LiveStreamPrototype from "./components/LiveStream/LiveStreamPrototype";

function App() {
  // Estado para alternar entre LoginScreen y LiveStreamPrototype
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(""); // Almacena el nombre del usuario

  // Función para manejar el inicio de sesión
  const handleLogin = (name) => {
    setUserName(name); // Actualiza el nombre del usuario
    setIsLoggedIn(true); // Cambia el estado a "logueado"
  };

  return (
    <div>
      {isLoggedIn ? (
        // Si está logueado, muestra LiveStreamPrototype
        <LiveStreamPrototype userName={userName} />
      ) : (
        // Si no está logueado, muestra LoginScreen
        <LoginScreen onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
