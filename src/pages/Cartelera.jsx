import { useState } from "react";
import PremiumCard from "../components/PremiumCard";
import peliculas from "../detalles.json";

function Cartelera({ verDetalle }) {
  const [filtro, setFiltro] = useState("");
  const peliculasFiltradas = peliculas
    .filter((pelicula) => pelicula.seccion === "cartelera")
    .filter((pelicula) =>
      pelicula.titulo.toLowerCase().includes(filtro.toLowerCase())
    );

  return (
    <main className="main-container">
      <h1 className="section-title">Cartelera</h1>
      <p className="section-subtitle">Disfruta las mejores películas en pantalla grande</p>

      <section className="home-controls">
        <div className="home-filter">
          <label htmlFor="buscador-cartelera">Buscar pelicula</label>
          <input
            id="buscador-cartelera"
            type="text"
            placeholder="Escribe un titulo..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>
      </section>

      <div className="grid-container">
        {peliculasFiltradas.map((pelicula) => (
          <PremiumCard
            key={pelicula.id}
            imagen={pelicula.imagen}
            titulo={pelicula.titulo}
            subtitulo={`${pelicula.genero} • ${pelicula.duracion}`}
            etiqueta={pelicula.etiqueta}
            textoBoton="Ver detalle"
            onClickBoton={() => verDetalle(pelicula)}
          />
        ))}
      </div>
    </main>
  );
}

export default Cartelera;