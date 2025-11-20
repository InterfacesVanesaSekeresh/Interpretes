import { Link } from "react-router-dom";
import ContenedorGlobal from "../components/ContenedorGlobal";
import Tarjeta from "../components/Tarjeta.jsx";
import peliculas from "../data/peliculas";

//La "qurry" de intérpretes
function Peliculas() {
  return (
    <ContenedorGlobal titulo="Películas">
      <article>
        <p className="body-text">Listado de películas disponibles:</p>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
          {peliculas.map((pelicula) => (
            <Link key={pelicula.id} to={`/pelicula/${pelicula.id}`}>
              {/* A donde va a ir el navegador al clicar */}
              <Tarjeta
                key={pelicula.id}
                nombre={pelicula.nombre}
                foto={pelicula.cartelera}
                clasificacion={pelicula.clasificacion}
              ></Tarjeta>
            </Link>
          ))}
        </section>
      </article>
    </ContenedorGlobal>
  );
}

export default Peliculas;
