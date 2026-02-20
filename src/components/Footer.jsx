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
          <a href="#">Terminos y condiciones</a>
          <a href="#">Aviso de privacidad</a>
          <a href="#">Contacto</a>
          <a href="#">Ubicaciones</a>
        </div>
      </div>

      <div className="site-footer-bottom">
        <span>2026 CINEMEX. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
