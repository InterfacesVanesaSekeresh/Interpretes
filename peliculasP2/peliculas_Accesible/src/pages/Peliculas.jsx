import { Link } from "react-router-dom";
import Contenedor from "../components/Contenedor";
import Tarjeta from "../components/Tarjeta.jsx";
import peliculas from "../data/peliculas";

function Peliculas() {
  return (
    <Contenedor titulo="Películas">
      <p className="body-text">Listado de películas disponibles:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
        {peliculas.map((pelicula) => (
          <Link key={pelicula.id} to={`/peliculas/${pelicula.id}`}> {/* A donde va a ir el navegador al clicar */}
          <Tarjeta
            key={pelicula.id}
            nombre={pelicula.nombre}
            foto={pelicula.cartelera}
            clasificacion={pelicula.clasificacion}
          ></Tarjeta>
          </Link>
        ))}
      </div>
    </Contenedor>
  );
}

export default Peliculas;
