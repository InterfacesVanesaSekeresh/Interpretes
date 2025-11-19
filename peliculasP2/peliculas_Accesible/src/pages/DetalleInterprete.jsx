import { useParams, useNavigate } from "react-router-dom";
import peliculas from "../data/peliculas";

function DetalleInterprete() {
  const { id } = useParams(); 
  const navigate = useNavigate(); // Hook para navegación programática
  //Crear un array con todos los actores de todas las peliculas
  const actores = peliculas.flatMap((pelicula) => pelicula.actores);
  //De string a entero
  const actor = actores[parseInt(id)];

  if (!actor) {
    return <p>Interprete no encontrado</p>;
  }
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{actor.nombre}</h1>
      <img src={actor.imagen} alt={`Foto de ${actor.nombre}`} />
      <p className="mt-4">{actor.biografia}</p>
      <button
        onClick={() => navigate("/interprete")} // Navegar a la página anterior
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Volver
      </button>
    </>
  );
}

export default DetalleInterprete;
