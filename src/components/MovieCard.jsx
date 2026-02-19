import Button from "./Button";

function MovieCard({ title, image, onVerDetalle }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        margin: "16px",
        borderRadius: "8px",
        maxWidth: "220px",
        textAlign: "center"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "280px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px"
        }}
      />
      {/* Contenido de la tarjeta */}
      <div style={{ padding: "12px", textAlign: "center" }}>
        <h3>{title}</h3>

        {/* Botón que permite ir a la vista de detalle */}
        <Button text="Ver detalle" onClick={onVerDetalle} />
      </div>
    </div>
  );
}

export default MovieCard;