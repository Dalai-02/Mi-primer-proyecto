import { useState } from "react";
import "./Header.css";

function Header({ cambiarVista }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const navegarA = (vista) => {
    cambiarVista(vista);
    setMenuAbierto(false); // Cierra el menú al navegar
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1>CINEMEX</h1>
        </div>

        {/* Botón hamburguesa para móvil */}
        <button
          className={`hamburger ${menuAbierto ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navegación */}
        <nav className={`header-nav ${menuAbierto ? "active" : ""}`}>
          <span className="nav-link" onClick={() => navegarA("home")}>
            Inicio
          </span>
          <span className="nav-link" onClick={() => navegarA("cartelera")}>
            Cartelera
          </span>
          <span className="nav-link" onClick={() => navegarA("dulceria")}>
            Dulcería
          </span>
          <span className="nav-link" onClick={() => navegarA("otros")}>
            Otros
          </span>
        </nav>
      </div>

      {/* Overlay para cerrar menú en móvil */}
      {menuAbierto && (
        <div className="header-overlay" onClick={() => setMenuAbierto(false)}></div>
      )}
    </header>
  );
}

export default Header;