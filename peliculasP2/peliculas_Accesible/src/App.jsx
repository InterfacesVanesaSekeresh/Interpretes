import Interpretes from "./pages/Interpretes.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Peliculas from "./pages/Peliculas.jsx";
import Admin from "./pages/Admin.jsx";
import { Routes, Route } from "react-router-dom";
import ContenidoPrincipal from "./pages/ContenidoPrincipal.jsx";

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
          <Route path="*" titulo="Contenido no encontrado" element={<p>La página que buscas no existe</p>} />

          {/*<Route
            path="*"
            element={
              <ContenidoPrincipal titulo="Contenido no encontrado">
                <p>La página que buscas no existe</p>
              </ContenidoPrincipal>
            }
          /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
