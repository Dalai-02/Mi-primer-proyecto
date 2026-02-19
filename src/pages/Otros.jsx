import PremiumCard from "../components/PremiumCard";

function Otros() {
  const promociones = [
    {
      titulo: "Martes de Descuento",
      descripcion: "50% de descuento en todas las funciones",
      imagen: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
      etiqueta: "50% OFF"
    },
    {
      titulo: "Combo Familiar",
      descripcion: "4 entradas + 2 palomitas grandes + 4 bebidas",
      imagen: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=800&q=80",
      etiqueta: "PROMO"
    },
    {
      titulo: "Miércoles de Plaza",
      descripcion: "Entrada a precio especial todos los miércoles",
      imagen: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
      etiqueta: "ESPECIAL"
    }
  ];

  const membresias = [
    {
      nombre: "Club CINEMEX Oro",
      descripcion: "Acumulación de puntos • Descuentos exclusivos • Preventas",
      imagen: "https://images.unsplash.com/photo-1633158829875-e5316a358c6f?w=800&q=80",
      precio: "$499",
      etiqueta: "ORO"
    },
    {
      nombre: "Club CINEMEX Platino",
      descripcion: "Todos los beneficios Oro • Boletos gratis • Acceso VIP",
      imagen: "https://images.unsplash.com/photo-1620912189865-1e81bdb552b7?w=800&q=80",
      precio: "$899",
      etiqueta: "PLATINO"
    }
  ];

  const formatosEspeciales = [
    {
      nombre: "IMAX",
      descripcion: "Máxima calidad de imagen y sonido",
      imagen: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&q=80",
      etiqueta: "PREMIUM"
    },
    {
      nombre: "4DX",
      descripcion: "Experiencia inmersiva con efectos físicos",
      imagen: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&q=80",
      etiqueta: "INMERSIVO"
    },
    {
      nombre: "ScreenX 270°",
      descripcion: "Proyección panorámica en tres paredes",
      imagen: "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?w=800&q=80",
      etiqueta: "PANORÁMICO"
    }
  ];

  return (
    <main className="main-container">
      <h1 className="section-title">Más Experiencias</h1>
      <p className="section-subtitle">Descubre nuestras promociones, membresías y formatos especiales</p>

      {/* Promociones */}
      <section className="mb-5">
        <div className="category-header">
          <div className="category-line"></div>
          <h2 className="category-title">Promociones</h2>
        </div>
        <div className="grid-container">
          {promociones.map((promo, index) => (
            <PremiumCard
              key={index}
              imagen={promo.imagen}
              titulo={promo.titulo}
              subtitulo={promo.descripcion}
              etiqueta={promo.etiqueta}
              textoBoton="Ver más"
              onClickBoton={() => {}}
            />
          ))}
        </div>
      </section>

      {/* Membresías */}
      <section className="mb-5">
        <div className="category-header">
          <div className="category-line"></div>
          <h2 className="category-title">Membresías</h2>
        </div>
        <div className="grid-container">
          {membresias.map((membresia, index) => (
            <PremiumCard
              key={index}
              imagen={membresia.imagen}
              titulo={membresia.nombre}
              subtitulo={membresia.descripcion}
              precio={`${membresia.precio}/año`}
              etiqueta={membresia.etiqueta}
              textoBoton="Suscribirse"
              onClickBoton={() => {}}
            />
          ))}
        </div>
      </section>

      {/* Formatos Especiales */}
      <section className="mb-5">
        <div className="category-header">
          <div className="category-line"></div>
          <h2 className="category-title">Formatos Especiales</h2>
        </div>
        <div className="grid-container">
          {formatosEspeciales.map((formato, index) => (
            <PremiumCard
              key={index}
              imagen={formato.imagen}
              titulo={formato.nombre}
              subtitulo={formato.descripcion}
              etiqueta={formato.etiqueta}
              textoBoton="Explorar"
              onClickBoton={() => {}}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Otros;
