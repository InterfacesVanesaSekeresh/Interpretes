import { useParams, useNavigate } from "react-router-dom";
import peliculas from "../data/peliculas";
import Tarjeta from "../components/Tarjeta.jsx";

function DetallePelicula() {
  const { id } = useParams(); // Obtener el ID de los parámetros de la URL
  const navigate = useNavigate(); // Hook para navegación programática

  // Buscar la película correspondiente al ID
  const pelicula = peliculas.find((p) => p.id === parseInt(id));
  if (!pelicula) {
    return <p>Película no encontrada</p>;
  }
  return (
    <>
      <article>
        {/*Para que el boton este a la misma altura del titulo*/}
        <section className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">{pelicula.nombre}</h1>
          <button
            onClick={() => navigate("/pelicula")}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Volver
          </button>

        </section>
        
        {/*Centrar la imagen (mx-auto) y el texto */}
        <section className="text-center">
          <img
            src={pelicula.cartelera}
            alt={`Cartelera de ${pelicula.nombre}`}
            className="mx-auto" 
          />
          <p className="mt-4">{pelicula.clasificacion}</p>
          <p className="mt-2">
            <strong>{pelicula.director}</strong>
          </p>
          <p className="mt-2">{pelicula.recaudacion}</p>
        </section>

        {/*Para que salgan los actores de esa película*/}
        <section className="mt-4">
          <h2 className="text-2xl font-semibold mb-2">Actores Principales</h2>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
            {pelicula.actores.map((actor, index) => (
              <Tarjeta 
              key={index} 
              nombre={actor.nombre} 
              foto={actor.imagen}
              >
                {actor.biografia}
              </Tarjeta>
            ))}
          </section>
        </section>
      </article>
    </>
  );
}

export default DetallePelicula;
