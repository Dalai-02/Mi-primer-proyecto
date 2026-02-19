import PremiumCard from "../components/PremiumCard";

function Home({ onVerDetalle }) {
  const peliculasDestacadas = [
    {
      title: "A Silent Voice",
      genero: "Animación • Drama",
      duracion: "130 min",
      imagen: "https://th.bing.com/th/id/OIP.l0HaZl195Uf2kG5h_gLHpAHaKy?w=207&h=301&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      etiqueta: "DESTACADO"
    },
    {
      title: "Frankenstein",
      genero: "Terror • Suspenso",
      duracion: "110 min",
      imagen: "https://th.bing.com/th/id/OIP.G7OJj0oUJVU3lgd4SjJBowHaK-?w=205&h=304&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      etiqueta: "NUEVO"
    },
    {
      title: "Cars",
      genero: "Animación • Infantil",
      duracion: "117 min",
      imagen: "https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg",
      etiqueta: "CLÁSICO"
    },
    {
      title: "Cómo entrenar a mi dragón",
      genero: "Animación • Aventura",
      duracion: "98 min",
      imagen: "https://th.bing.com/th/id/OIP.mXA-s9HbNR-LPajanFpSEwHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      etiqueta: "FAMILIAR"
    }
  ];

  return (
    <main className="main-container">
      <h1 className="section-title">Bienvenido a CINEMEX</h1>
      <p className="section-subtitle">Tu destino para las mejores experiencias cinematográficas</p>

      <div className="grid-container">
        {peliculasDestacadas.map((pelicula, index) => (
          <PremiumCard
            key={index}
            imagen={pelicula.imagen}
            titulo={pelicula.title}
            subtitulo={`${pelicula.genero} • ${pelicula.duracion}`}
            etiqueta={pelicula.etiqueta}
            textoBoton="Ver detalle"
            onClickBoton={() => onVerDetalle(pelicula)}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;