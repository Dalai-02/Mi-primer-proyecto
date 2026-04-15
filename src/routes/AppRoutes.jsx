import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const Cartelera = lazy(() => import("../pages/Cartelera"));
const Detalle = lazy(() => import("../pages/Detalle"));
const Dulceria = lazy(() => import("../pages/Dulceria"));
const Otros = lazy(() => import("../pages/Otros"));
const Contacto = lazy(() => import("../pages/Contacto"));
const Terminos = lazy(() => import("../pages/Terminos"));
const Privacidad = lazy(() => import("../pages/Privacidad"));

function AppRoutes() {
  return (
    <Suspense fallback={<p className="route-loader">Cargando pagina...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/dulceria" element={<Dulceria />} />
        <Route path="/otros" element={<Otros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
