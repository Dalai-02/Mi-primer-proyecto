import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Button from "../components/Button";
import { peliculasData } from "../data/peliculas";

function Detalle() {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [cantidadBoletos, setCantidadBoletos] = useState(1);
  const [mensaje, setMensaje] = useState("");

  const pelicula = peliculasData.find((p) => p.id === Number(id));

  if (!pelicula) {
    return <Navigate to="/" replace />;
  }

  function manejarCompra(e) {
    e.preventDefault();

    setMensaje(
      `Gracias ${nombre}, compraste ${cantidadBoletos} boleto(s) para ${pelicula.titulo}`
    );

    setNombre("");
    setCantidadBoletos(1);
  }

  return (
    <main className="detalle-page">
      <section className="detalle-card">
        <div className="detalle-media">
          <img src={pelicula.imagen} alt={pelicula.titulo} />
          <div className="detalle-glow"></div>
        </div>

        <div className="detalle-body">
          <div className="detalle-head">
            <p className="detalle-kicker">Detalle de la pelicula</p>
            <h2>{pelicula.titulo}</h2>
          </div>

          <div className="detalle-meta">
            {pelicula.etiqueta && (
              <span className="detalle-chip">{pelicula.etiqueta}</span>
            )}
            <span>{pelicula.genero}</span>
            <span>{pelicula.duracion}</span>
            {pelicula.clasificacion && (
              <span>Clasificacion: {pelicula.clasificacion}</span>
            )}
          </div>

          <p className="detalle-sinopsis">{pelicula.sinopsis}</p>

          <div className="detalle-info">
            {pelicula.director && <p>Director: {pelicula.director}</p>}
            {pelicula.reparto && <p>Reparto: {pelicula.reparto}</p>}
          </div>

          <div className="detalle-divider"></div>

          <div className="detalle-form">
            <h3>Comprar boletos</h3>
            <form onSubmit={manejarCompra}>
              <label>
                Nombre
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  required
                />
              </label>

              <label>
                Cantidad de boletos
                <input
                  type="number"
                  min="1"
                  value={cantidadBoletos}
                  onChange={(e) => setCantidadBoletos(e.target.value)}
                  required
                />
              </label>

              <Button type="submit" className="btn btn-primary">
                Comprar
              </Button>
            </form>
            {mensaje && <p className="detalle-mensaje">{mensaje}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Detalle;