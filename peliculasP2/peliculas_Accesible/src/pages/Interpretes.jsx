import Tarjeta from "../components/Tarjeta.jsx";
import Contenedor from "../components/Contenedor.jsx";
import  peliculas from "../data/peliculas";

function Interpretes()  {
    return (
        <Contenedor titulo="Intérpretes de películas destacadas">
    
        <p className="body-text">Listado de intérpretes disponibles:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
          {peliculas
            .map((pelicula) =>
              pelicula.actores.map((actor, index) => (
                <Tarjeta
                  key={index}
                  nombre={actor.nombre}
                  foto={actor.imagen}
                  esNota10={pelicula.nota === 10}
                >
                  {actor.biografia}
                </Tarjeta>
              ))
            )}
        </div>
      </Contenedor>
    );
}

export default Interpretes;