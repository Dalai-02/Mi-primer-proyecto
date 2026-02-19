// Vista de detalle de una película
function Detalle({ pelicula }) {
  const titulo = pelicula?.titulo || pelicula?.title || "Película Seleccionada";
  const imagen = pelicula?.imagen || pelicula?.image || "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80";
  const genero = pelicula?.genero || "Aventura";
  const duracion = pelicula?.duracion || "120 min";
  const etiqueta = pelicula?.etiqueta;

  return (
    <main className="main-container">
      {/* Hero Section */}
      <div className="detalle-hero">
        <div className="detalle-image-container">
          <img src={imagen} alt={titulo} className="detalle-image" />
          <div className="detalle-gradient"></div>
        </div>
        
        <div className="detalle-info">
          <h1 className="detalle-title">{titulo}</h1>
          
          <div className="detalle-meta">
            {etiqueta && <span className="detalle-badge">{etiqueta}</span>}
            <span className="detalle-genre">{genero}</span>
            <span className="detalle-duration">{duracion}</span>
          </div>

          <div className="detalle-sinopsis">
            <h2>Sinopsis</h2>
            <p>
              Una historia épica que te mantendrá al borde de tu asiento. 
              Experimenta la magia del cine con la mejor calidad de imagen y sonido. 
              Disfruta de esta película en la comodidad de nuestras salas premium 
              con tecnología de última generación.
            </p>
          </div>

          <button className="btn btn-primary btn-large">
            Comprar Boletos
          </button>
        </div>
      </div>
    </main>
  );
}

// Exportamos la vista
export default Detalle;