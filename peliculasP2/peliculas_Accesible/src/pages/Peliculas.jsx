import Contenedor from "../components/Contenedor";
import Tarjeta from "../components/Tarjeta.jsx";
import peliculas from "../data/peliculas";

function Peliculas() {
  return (
    <Contenedor titulo="Películas">
      <p className="body-text">Listado de películas disponibles:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
        {peliculas.map((pelicula) => (
          <Tarjeta
            key={pelicula.id}
            nombre={pelicula.nombre}
            foto={pelicula.cartelera}
            clasificacion={pelicula.clasificacion}
          />
        ))}
      </div>
    </Contenedor>
  );
}

export default Peliculas;
