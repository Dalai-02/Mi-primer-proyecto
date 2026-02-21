import { useEffect, useRef, useState } from "react";
import PremiumCard from "../components/PremiumCard";
import peliculasData from "../detalles.json";

function Home({ verDetalle }) {
  const [peliculasHome, setPeliculasHome] = useState([]);
  const [favoritas, setFavoritas] = useState([]);
  const [descripcionAbierta, setDescripcionAbierta] = useState(null);
  const [recordatorios, setRecordatorios] = useState([]);
  const carouselRef = useRef(null);
  const [noticias, setNoticias] = useState([]);

  function mezclarPeliculas(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  useEffect(() => {
    const data = peliculasData.filter((pelicula) => pelicula.seccion === "home");
    const destacadas = mezclarPeliculas(data).slice(0, 4);
    setPeliculasHome(destacadas);
  }, []);

  useEffect(() => {
    let isActive = true;
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => response.json())
      .then((data) => {
        if (isActive) setNoticias(data);
      })
      .catch(() => {
        if (isActive) setNoticias([]);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const peliculasFiltradas = peliculasHome;

  function toggleFavorita(id) {
    setFavoritas((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  function toggleDescripcion(id) {
    setDescripcionAbierta((prev) => (prev === id ? null : id));
  }

  const estrenos = [
    {
      id: 101,
      titulo: "Horizonte Neon",
      fechaEstreno: "12 Mar 2026",
      imagen:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&q=80"
    },
    {
      id: 102,
      titulo: "Mar de Acero",
      fechaEstreno: "26 Mar 2026",
      imagen:
        "https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=900&q=80"
    },
    {
      id: 103,
      titulo: "Codigo Aurora",
      fechaEstreno: "9 Abr 2026",
      imagen:
        "https://images.unsplash.com/photo-1517602383353-e7db3b0ea3a0?w=900&q=80"
    },
    {
      id: 104,
      titulo: "Ultima Funcion",
      fechaEstreno: "30 Abr 2026",
      imagen:
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900&q=80"
    }
  ];

  const promociones = [
    "2x1 miercoles",
    "Combo familiar",
    "Membresia VIP",
    "Descuentos para estudiantes"
  ];

  function toggleRecordatorio(id) {
    setRecordatorios((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  function scrollCarousel(direction) {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({
      left: direction * 320,
      behavior: "smooth"
    });
  }

  return (
    <main className="main-container">
      <section
        className="home-hero-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80')"
        }}
      >
        <div className="home-hero-inner">
          <p className="home-hero-tag">Pelicula principal</p>
          <h1>La Gran Noche</h1>
          <p className="home-hero-date">Estreno: 1 de marzo 2026</p>
          <p className="home-hero-copy">
            Vive una experiencia cinematografica intensa con sonido premium,
            salas reclinables y funciones exclusivas.
          </p>
          <button className="btn btn-primary">Comprar boletos</button>
        </div>
      </section>

      <div className="home-section-head">
        <h2>Cartelera destacada</h2>
      </div>

      <section className="home-controls">
        <div className="home-favorites">
          <span>Favoritas: {favoritas.length}</span>
        </div>
      </section>

      <div className="grid-container">
        {peliculasFiltradas.map((pelicula) => (
          <div
            key={pelicula.id}
            className={`home-card ${favoritas.includes(pelicula.id) ? "is-favorite" : ""}`}
          >
            <PremiumCard
              imagen={pelicula.imagen}
              titulo={pelicula.titulo}
              subtitulo={`${pelicula.genero} • ${pelicula.duracion}`}
              etiqueta={pelicula.etiqueta}
              textoBoton="Ver detalle"
              onClickBoton={() => verDetalle(pelicula)}
            />

            <div className="home-actions">
              <button
                className="btn btn-outline"
                onClick={() => toggleDescripcion(pelicula.id)}
              >
                {descripcionAbierta === pelicula.id
                  ? "Ocultar descripcion"
                  : "Ver descripcion"}
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => toggleFavorita(pelicula.id)}
              >
                {favoritas.includes(pelicula.id)
                  ? "Quitar de favoritas"
                  : "Agregar a favoritas"}
              </button>
            </div>

            {descripcionAbierta === pelicula.id && (
              <p className="home-description">{pelicula.sinopsis}</p>
            )}
          </div>
        ))}
      </div>

      <section className="home-section">
        <div className="home-section-head home-section-row">
          <div>
            <h2>Proximos estrenos</h2>
            <p>Activa un recordatorio para no perderte la funcion.</p>
          </div>
          <div className="home-carousel-controls">
            <button
              className="btn btn-outline"
              onClick={() => scrollCarousel(-1)}
              aria-label="Anterior"
            >
              ◀
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollCarousel(1)}
              aria-label="Siguiente"
            >
              ▶
            </button>
          </div>
        </div>
        <div className="home-carousel" ref={carouselRef}>
          {estrenos.map((estreno) => (
            <article key={estreno.id} className="home-carousel-card">
              <img src={estreno.imagen} alt={estreno.titulo} />
              <div className="home-carousel-body">
                <h3>{estreno.titulo}</h3>
                <p>Estreno: {estreno.fechaEstreno}</p>
                <button
                  className={`btn ${
                    recordatorios.includes(estreno.id)
                      ? "btn-secondary"
                      : "btn-outline"
                  }`}
                  onClick={() => toggleRecordatorio(estreno.id)}
                >
                  {recordatorios.includes(estreno.id)
                    ? "Recordatorio activo"
                    : "Agregar recordatorio"}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <h2>Promociones actuales</h2>
          <p>Elige la mejor oferta para tu proxima visita.</p>
        </div>
        <div className="home-promos">
          {promociones.map((promo) => (
            <div key={promo} className="home-promo-card">
              <h3>{promo}</h3>
              <p>Disponible esta semana en salas seleccionadas.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section-head">
          <h2>Noticias del cine</h2>
          <p>Actualizaciones rapidas y lanzamientos destacados.</p>
        </div>
        <div className="home-news">
          {noticias.length === 0 && (
            <p className="home-news-empty">Cargando noticias...</p>
          )}
          {noticias.map((nota) => (
            <article key={nota.id} className="home-news-card">
              <h3>{nota.title}</h3>
              <p>{nota.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;