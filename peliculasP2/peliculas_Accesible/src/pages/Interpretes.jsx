import { Link } from "react-router-dom";
import Tarjeta from "../components/Tarjeta.jsx";
import ContenedorGlobal from "../components/ContenedorGlobal.jsx";
import peliculas from "../data/peliculas";

//La "qurry" de intérpretes
function Interpretes() {
  // Variable para llevar la cuenta del índice global de actores
  // Ya que al estar dentor del array de peliculas, el index se reinicia en cada pelicula
  let globalIndex = 0;

  return (
    <ContenedorGlobal titulo="Intérpretes de películas destacadas">
      <p className="body-text">Listado de intérpretes disponibles:</p>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
        {peliculas.map((pelicula) =>
          pelicula.actores.map((actor) => {
            // Asignar el índice global actual y luego incrementarlo
            const index = globalIndex++;
            return (
              // Enlazar a la página de detalle del intérprete usando el índice global
              <Link key={`${pelicula.id}-${index}`} to={`/interprete/${pelicula.id}/${index}`}>
                <Tarjeta
                  nombre={actor.nombre}
                  foto={actor.imagen}
                  esNota10={pelicula.nota === 10}
                >
                  {actor.biografia}
                </Tarjeta>
              </Link>
            );
          })
        )}
      </section>
    </ContenedorGlobal>
  );
}

export default Interpretes;
