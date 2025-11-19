import { useParams, useNavigate } from "react-router-dom";
import peliculas from "../data/peliculas";

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
        <section>
        <img src={pelicula.cartelera} alt={`Cartelera de ${pelicula.nombre}`} />
        <p className="mt-4">{pelicula.clasificacion}</p>
        <p className="mt-2">
          <strong>{pelicula.director}</strong>
        </p>
        <p className="mt-2">{pelicula.recaudacion}</p>
        </section>
      </article>
    </>
  );
}

export default DetallePelicula;
