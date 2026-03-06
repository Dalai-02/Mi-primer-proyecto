import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cartelera from "./pages/Cartelera";
import Detalle from "./pages/Detalle";
import Dulceria from "./pages/Dulceria";
import Otros from "./pages/Otros";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/dulceria" element={<Dulceria />} />
        <Route path="/otros" element={<Otros />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
