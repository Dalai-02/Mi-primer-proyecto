import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PremiumCard from "../components/PremiumCard";
import MovieCarousel from "../components/MovieCarousel";
import { mezclarLista, peliculasData } from "../data/peliculas";

function Cartelera() {
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState("");

  const peliculasRandom = useMemo(() => {
    return mezclarLista(peliculasData);
  }, []);

  const peliculasFiltradas = useMemo(
    () =>
      peliculasData.filter((pelicula) =>
        pelicula.titulo.toLowerCase().includes(filtro.toLowerCase())
      ),
    [filtro]
  );

  return (
    <main className="main-container">
      <h1 className="section-title">Cartelera</h1>
      <p className="section-subtitle">Disfruta las mejores películas en pantalla grande</p>

      <section className="cartelera-estrenos">
        <h2>ESTRENOS</h2>
        <MovieCarousel
          movies={peliculasRandom}
          onVerDetalle={(id) => navigate(`/detalle/${id}`)}
        />
      </section>

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
            onClickBoton={() => navigate(`/detalle/${pelicula.id}`)}
          />
        ))}
      </div>
    </main>
  );
}

export default Cartelera;