import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Detalle from "./pages/Detalle";
import Dulceria from "./pages/Dulceria";
import Otros from "./pages/Otros";
import Footer from "./components/Footer";

function App() {
  const [vistaActual, setVistaActual] = useState("home");
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  function verDetalle(pelicula) {
    setPeliculaSeleccionada(pelicula);
    setVistaActual("detalle");
  }

  return (
    <>
      <Header cambiarVista={setVistaActual} />

      {vistaActual === "home" && <Home verDetalle={verDetalle} />}
      {vistaActual === "cartelera" && <Cartelera verDetalle={verDetalle} />}
      {vistaActual === "detalle" && (
        <Detalle pelicula={peliculaSeleccionada} />
      )}
      {vistaActual === "dulceria" && <Dulceria />}
      {vistaActual === "otros" && <Otros />}

      <Footer />
    </>
  );
}

export default App;
