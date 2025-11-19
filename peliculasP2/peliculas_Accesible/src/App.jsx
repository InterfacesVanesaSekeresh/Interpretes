import Interpretes from "./pages/Interpretes.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Peliculas from "./pages/Peliculas.jsx";
import Admin from "./pages/Admin.jsx";
import { Routes, Route } from "react-router-dom";
import ContenidoPrincipal from "./pages/ContenidoPrincipal.jsx";
import DetalleInterprete from "./pages/DetalleInterprete.jsx";
import DetallePelicula from "./pages/DetallePelicula.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ContenidoPrincipal />}>
          <Route index element={<Home />} />
          <Route path="inicio" element={<Home />} />
          <Route path="pelicula" element={<Peliculas />} />
          <Route path="interprete" element={<Interpretes />} />
          <Route path="admin" element={<Admin />} />
          <Route path="pelicula/:id" element={<DetallePelicula />} />
          <Route path="interprete/:id" element={<DetalleInterprete />} />
          <Route
            path="*"
            titulo="Contenido no encontrado"
            element={<p>La página que buscas no existe</p>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
