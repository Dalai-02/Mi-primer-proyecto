import PremiumCard from "../components/PremiumCard";

function Cartelera({ onVerDetalle }) {
  const peliculas = [
    {
      title: "Kung Fu Panda 4",
      genero: "Animación • Comedia",
      duracion: "94 min",
      imagen: "https://image.tmdb.org/t/p/w500/2htzK7DAi0Q2o4e1T4H8k3XyF9L.jpg",
      etiqueta: "ESTRENO"
    },
    {
      title: "Minecraft: La película",
      genero: "Aventura • Fantasía",
      duracion: "120 min",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_630015-MLM80889155669_112024-O.webp",
      etiqueta: "PREVENTA"
    },
    {
      title: "La leyenda de Teodora",
      genero: "Drama • Misterio",
      duracion: "110 min",
      imagen: "https://image.tmdb.org/t/p/w500/8FQLZu6LfdqHNIW5GbAg8MZEkoK.jpg",
      etiqueta: "NUEVO"
    },
    {
      title: "Kimi no Nawa",
      genero: "Animación • Romance",
      duracion: "106 min",
      imagen: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
      etiqueta: "REESTRENO"
    },
    {
      title: "Avatar 3",
      genero: "Ciencia Ficción • Acción",
      duracion: "180 min",
      imagen: "https://th.bing.com/th/id/OIP.2mJQufmGj8HgLyp5dtNXNAHaK-?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      etiqueta: "IMAX"
    }
  ];

  return (
    <main className="main-container">
      <h1 className="section-title">Cartelera</h1>
      <p className="section-subtitle">Disfruta las mejores películas en pantalla grande</p>

      <div className="grid-container">
        {peliculas.map((pelicula, index) => (
          <PremiumCard
            key={index}
            imagen={pelicula.imagen}
            titulo={pelicula.title}
            subtitulo={`${pelicula.genero} • ${pelicula.duracion}`}
            etiqueta={pelicula.etiqueta}
            textoBoton="Comprar boletos"
            onClickBoton={() => onVerDetalle(pelicula)}
          />
        ))}
      </div>
    </main>
  );
}

export default Cartelera;