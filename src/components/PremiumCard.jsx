import "./PremiumCard.css";

function PremiumCard({ 
  imagen, 
  titulo, 
  subtitulo, 
  precio, 
  etiqueta,
  textoBoton = "Ver más",
  onClickBoton 
}) {
  return (
    <div className="premium-card">
      <div className="premium-card-image-wrapper">
        <img src={imagen} alt={titulo} className="premium-card-image" />
        {etiqueta && (
          <span className="premium-card-badge">{etiqueta}</span>
        )}
      </div>
      
      <div className="premium-card-body">
        <h3 className="premium-card-title">{titulo}</h3>
        
        {subtitulo && (
          <p className="premium-card-subtitle">{subtitulo}</p>
        )}
        
        {precio && (
          <p className="premium-card-price">{precio}</p>
        )}
        
        <button className="premium-card-btn" onClick={onClickBoton}>
          {textoBoton}
        </button>
      </div>
    </div>
  );
}

export default PremiumCard;
