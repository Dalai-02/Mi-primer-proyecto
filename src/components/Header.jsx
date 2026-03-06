import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
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
          <NavLink 
            to="/" 
            className="nav-link"
            onClick={cerrarMenu}
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/cartelera" 
            className="nav-link"
            onClick={cerrarMenu}
          >
            Cartelera
          </NavLink>
          <NavLink 
            to="/dulceria" 
            className="nav-link"
            onClick={cerrarMenu}
          >
            Dulcería
          </NavLink>
          <NavLink 
            to="/otros" 
            className="nav-link"
            onClick={cerrarMenu}
          >
            Otros
          </NavLink>
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