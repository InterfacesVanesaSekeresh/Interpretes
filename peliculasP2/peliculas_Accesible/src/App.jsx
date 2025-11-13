import Contenedor from "./components/Contenedor";
import Interprete from "./pages/InterpreteAccesible.jsx";
import peliculas from "./data/peliculas";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Contenedor />}>
          <Route path="inicio" element={<Home />} />
          <Route path="pelicula" element={<Peliculas />} />
          <Route path="interprete" element={<Interprete />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>

      <Contenedor titulo="Intérpretes de películas destacadas">
    
        <p className="body-text">Listado de intérpretes disponibles:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
          {peliculas
            .map((pelicula) =>
              pelicula.actores.map((actor, index) => (
                <Interprete
                  key={index}
                  nombre={actor.nombre}
                  foto={actor.imagen}
                  esNota10={pelicula.nota === 10}
                >
                  {actor.biografia}
                </Interprete>
              ))
            )}
        </div>
      </Contenedor>
    </>
  );
}

export default App;
