import "./MovieCard.css";
import Button from "./Button";

function MovieCard({ title, image, onVerDetalle }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-card-image" />
      <div className="movie-card-content">
        <h3 className="movie-card-title">{title}</h3>
        <Button className="btn btn-secondary" onClick={onVerDetalle}>
          Ver detalle
        </Button>
      </div>
    </div>
  );
}

export default MovieCard;