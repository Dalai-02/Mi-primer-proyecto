import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Detalle from "./pages/Detalle";
import Dulceria from "./pages/Dulceria";
import Otros from "./pages/Otros";

function App() {
  const [vista, setVista] = useState("home");
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const irADetalle = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
    setVista("detalle");
  };

  return (
    <>
      <Header cambiarVista={setVista} />

      {vista === "home" && <Home onVerDetalle={irADetalle} />}
      {vista === "cartelera" && <Cartelera onVerDetalle={irADetalle} />}
      {vista === "detalle" && <Detalle pelicula={peliculaSeleccionada} />}
      {vista === "dulceria" && <Dulceria />}
      {vista === "otros" && <Otros />}
    </>
  );
}

export default App;
