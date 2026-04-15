import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <h2>CINEMEX</h2>
          <p>Experiencias cinematograficas con la mejor tecnologia.</p>
        </div>

        <div className="site-footer-group">
          <h3>Redes sociales</h3>
          <div className="site-footer-socials">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="X">X</a>
          </div>
        </div>

        <div className="site-footer-group">
          <h3>Informacion</h3>
          <Link to="/terminos">Terminos y condiciones</Link>
          <Link to="/privacidad">Aviso de privacidad</Link>
          <Link to="/contacto">Contacto</Link>
          <a href="#">Ubicaciones</a>
        </div>

        <div className="site-footer-group site-footer-apps">
          <h3>Descarga la app</h3>
          <div className="site-footer-store-badges">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              aria-label="Descargar en App Store"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Disponible en App Store"
              />
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              aria-label="Descargar en Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Disponible en Google Play"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>2026 CINEMEX. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
