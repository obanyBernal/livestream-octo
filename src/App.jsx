/* import LiveStreamPrototype from "./components/LiveStreamPrototype";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LiveStreamPrototype />
    </div>
  );
}

export default App;
 */
//con este codigo podemos llamar un componente individual//
/* import LoginScreen from "./components/LoginScreen";

function App() {
  return (
    <div>
      <LoginScreen />
    </div>
  );
}

export default App;
 */

import { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import LiveStreamPrototype from "./components/LiveStreamPrototype";

function App() {
  // Estado para alternar entre LoginScreen y LiveStreamPrototype
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    setIsLoggedIn(true); // Cambia el estado a "logueado"
  };

  return (
    <div>
      {isLoggedIn ? (
        // Si está logueado, muestra LiveStreamPrototype
        <LiveStreamPrototype />
      ) : (
        // Si no está logueado, muestra LoginScreen
        <LoginScreen onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
