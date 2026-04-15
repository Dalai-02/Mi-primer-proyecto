import { useState } from "react";
import Button from "../components/Button";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: ""
  });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: ""
      });
    }, 3000);
  }

  const sucursales = [
    {
      nombre: "CINEMEX Polanco",
      direccion: "Av. Ejercito Nacional 843, Polanco, CDMX",
      telefono: "55-5280-9000",
      horario: "10:00 AM - 11:00 PM"
    },
    {
      nombre: "CINEMEX Santa Fe",
      direccion: "Av. Vasco de Quiroga 3800, Santa Fe, CDMX",
      telefono: "55-9171-0000",
      horario: "10:00 AM - 12:00 AM"
    },
    {
      nombre: "CINEMEX Insurgentes",
      direccion: "Av. Insurgentes Sur 1971, CDMX",
      telefono: "55-5661-5460",
      horario: "11:00 AM - 11:00 PM"
    }
  ];

  return (
    <main className="main-container">
      <div className="section-header">
        <h1 className="section-title">Contacto</h1>
        <p className="section-subtitle">
          Estamos para ayudarte. Envianos tus comentarios o dudas
        </p>
      </div>

      <div className="contacto-layout">
        <section className="contacto-form-section">
          <h2>Envianos un mensaje</h2>
          <form onSubmit={handleSubmit} className="contacto-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electronico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="55-1234-5678"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <select
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un asunto</option>
                <option value="boletos">Boletos y reservaciones</option>
                <option value="dulceria">Dulceria</option>
                <option value="membresia">Membresia</option>
                <option value="sugerencia">Sugerencia</option>
                <option value="queja">Queja</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuentanos como podemos ayudarte..."
                rows="5"
                required
              ></textarea>
            </div>

            <Button type="submit" className="btn btn-primary btn-large">
              {enviado ? "✓ Mensaje enviado" : "Enviar mensaje"}
            </Button>

            {enviado && (
              <div className="mensaje-exito">
                <p>
                  ¡Gracias por contactarnos! Responderemos tu mensaje a la
                  brevedad.
                </p>
              </div>
            )}
          </form>
        </section>

        <aside className="contacto-info">
          <div className="info-card">
            <h3>Informacion de contacto</h3>
            <div className="info-item">
              <strong> Centro de atencion</strong>
              <p>55-2122-9000</p>
              <p className="info-subtitle">Lun - Dom: 9:00 AM - 10:00 PM</p>
            </div>
            <div className="info-item">
              <strong> Email</strong>
              <p>contacto@cinemex.com</p>
              <p>soporte@cinemex.com</p>
            </div>
            <div className="info-item">
              <strong> Redes sociales</strong>
              <p>@CinemexOficial</p>
              <p>CinemexMexico</p>
            </div>
          </div>

          <div className="info-card">
            <h3>Preguntas frecuentes</h3>
            <ul className="faq-list">
              <li>¿Como comprar boletos en linea?</li>
              <li>¿Como activar mi membresia?</li>
              <li>¿Politica de reembolsos?</li>
              <li>¿Horarios de funciones?</li>
            </ul>
          </div>
        </aside>
      </div>

      <section className="sucursales-section">
        <h2>Nuestras sucursales</h2>
        <p className="section-subtitle">
          Encuentra el cine mas cercano a tu ubicacion
        </p>
        <div className="sucursales-grid">
          {sucursales.map((sucursal, index) => (
            <article key={index} className="sucursal-card">
              <h3>{sucursal.nombre}</h3>
              <div className="sucursal-info">
                <p>
                  <strong> Direccion:</strong> {sucursal.direccion}
                </p>
                <p>
                  <strong> Telefono:</strong> {sucursal.telefono}
                </p>
                <p>
                  <strong> Horario:</strong> {sucursal.horario}
                </p>
              </div>
              <Button className="btn btn-outline">Ver en mapa</Button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Contacto;
