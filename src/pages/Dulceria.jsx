import PremiumCard from "../components/PremiumCard";

function Dulceria() {
  const bebidas = [
    {
      nombre: "Coca-Cola Grande",
      descripcion: "1 Litro",
      imagen: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&q=80",
      precio: "$45"
    },
    {
      nombre: "Agua Mineral",
      descripcion: "600ml",
      imagen: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      precio: "$30"
    }
  ];

  const comestibles = [
    {
      nombre: "Hot Dog Especial",
      descripcion: "Con queso y jalapeños",
      imagen: "https://images.unsplash.com/photo-1612392062798-2307c8545d2e?w=800&q=80",
      precio: "$75"
    },
    {
      nombre: "Nachos Premium",
      descripcion: "Con queso fundido",
      imagen: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80",
      precio: "$80"
    }
  ];

  const snacks = [
    {
      nombre: "Palomitas Jumbo",
      descripcion: "Con mantequilla extra",
      imagen: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=800&q=80",
      precio: "$90"
    },
    {
      nombre: "M&M's Peanut",
      descripcion: "Bolsa grande",
      imagen: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800&q=80",
      precio: "$55"
    }
  ];

  const combos = [
    {
      nombre: "Combo Clasico",
      descripcion: "Palomitas grandes + refresco 1L",
      imagen: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?w=800&q=80",
      precio: "$140"
    },
    {
      nombre: "Combo Pareja",
      descripcion: "2 nachos + 2 refrescos medianos",
      imagen: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
      precio: "$220"
    },
    {
      nombre: "Combo Familiar",
      descripcion: "Palomitas jumbo + 2 refrescos + 2 hot dogs",
      imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      precio: "$320"
    }
  ];

  const descuentos = [
    {
      titulo: "2x1 Miercoles",
      descripcion: "En combos seleccionados, solo en salas participantes."
    },
    {
      titulo: "Happy Hour",
      descripcion: "20% de descuento de 4 a 6 PM en bebidas grandes."
    }
  ];

  const cupones = [
    {
      titulo: "CUPONCINE",
      descripcion: "10% de descuento en tu sigueinte compra en dulcería."
    },
    {
      titulo: "DULCEVIP",
      descripcion: "Palomitas chicas gratis en compras mayores a $200."
    }
  ];

  return (
    <main className="main-container">
      <h1 className="section-title">Dulcería</h1>
      <p className="section-subtitle">Complementa tu experiencia con nuestros deliciosos snacks</p>

      {/* Bebidas */}
      <section className="mb-5">
        <div className="category-header">
          <div className="category-line"></div>
          <h2 className="category-title">Bebidas</h2>
        </div>
        <div className="grid-container">
          {bebidas.map((item, index) => (
            <PremiumCard
              key={index}
              imagen={item.imagen}
              titulo={item.nombre}
              subtitulo={item.descripcion}
              precio={item.precio}
              textoBoton="Agregar"
              onClickBoton={() => {}}
            />
          ))}
        </div>
      </section>

      {/* Comestibles */}
      <section className="mb-5">
        <div className="category-header">
          <div className="category-line"></div>
          <h2 className="category-title">Comestibles</h2>
        </div>
        <div className="grid-container">
          {comestibles.map((item, index) => (
            <PremiumCard
              key={index}
              imagen={item.imagen}
              titulo={item.nombre}
              subtitulo={item.descripcion}
              precio={item.precio}
              textoBoton="Agregar"
              onClickBoton={() => {}}
            />
          ))}
        </div>
      </section>

      {/* Snacks */}
      <section className="mb-5">
        <div className="category-header">
          <div className="category-line"></div>
          <h2 className="category-title">Snacks y Dulces</h2>
        </div>
        <div className="grid-container">
          {snacks.map((item, index) => (
            <PremiumCard
              key={index}
              imagen={item.imagen}
              titulo={item.nombre}
              subtitulo={item.descripcion}
              precio={item.precio}
              textoBoton="Agregar"
              onClickBoton={() => {}}
            />
          ))}
        </div>
      </section>

      {/* Combos */}
      <section className="mb-5">
        <div className="category-header">
          <div className="category-line"></div>
          <h2 className="category-title">Combos destacados</h2>
        </div>
        <div className="grid-container">
          {combos.map((item, index) => (
            <PremiumCard
              key={index}
              imagen={item.imagen}
              titulo={item.nombre}
              subtitulo={item.descripcion}
              precio={item.precio}
              textoBoton="Agregar"
              onClickBoton={() => {}}
            />
          ))}
        </div>
      </section>

      {/* Descuentos y cupones */}
      <section className="dulceria-promos">
        <div className="dulceria-promos-column">
          <h3>Descuentos</h3>
          {descuentos.map((item) => (
            <div key={item.titulo} className="dulceria-note">
              <h4>{item.titulo}</h4>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>
        <div className="dulceria-promos-column">
          <h3>Cupones</h3>
          {cupones.map((item) => (
            <div key={item.titulo} className="dulceria-note">
              <h4>{item.titulo}</h4>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dulceria;
