import { act } from "react";
import Contenedor from "./Contenedor";
import Interprete from "./Interprete";


import './data/peliculas.js';
import peliculas from "./data/peliculas.js";

function App() {

  return (
    <>
    
      <Contenedor titulo="Intérpretes de películas destacadas">

        {/* <h1 className="contenedor__h1">Mis Interpretes</h1>
       <h1 className="contenedor__large-text">Listado de Interpretes disponibles</h1> */}

        {/* Index = El "id" de cada peli, extraigo el nombre, su foto y biografía
        y lo paso al componente Interprete. */}
        {/* {peliculas.map((pelicula) =>
          pelicula.actores.map((actor, index) => (
           <Interprete
               key={index}
              nombre={actor.nombre}
              foto={actor.imagen}>
              {actor.biografia}
            </Interprete>
          ))
        )} */}

        {/* Hay que poner "{}" para que sepa que es código */}
        {/* {
        peliculas
        .filter(pelicula => pelicula.clasificacion === "Drama")
        .map((pelicula) =>
          pelicula.actores.map((actor, index) => (
           <Interprete
               key={index}
              nombre={actor.nombre}
              foto={actor.imagen}>
              {actor.biografia}
            </Interprete>
          ))
        )} */}

        {
          peliculas
          .map((pelicula) =>
          pelicula.actores.map((actor, index) => (
           <Interprete
               key={index}
              nombre={actor.nombre}
              foto={actor.imagen}
              esNota10={pelicula.nota == 10}
            >
              {actor.biografia}
            </Interprete>
          ))
        )}     

        
          
           {/* <Interprete
            nombre="Marlon Brando"
            foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png"
          >
            Marlon Brando fue un influyente actor estadounidense...
          </Interprete>

          <Interprete
            nomre="Al Pacino"
            foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg"
          >
            Al Pacino es un actor y director de cine estadounidense...
          </Interprete>

          <Interprete
            nombre="Marlon Brando"
            foto="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Marlon_Brando_publicity_for_One-Eyed_Jacks.png/270px-Marlon_Brando_publicity_for_One-Eyed_Jacks.png"
          >
            Marlon Brando fue un influyente actor estadounidense...
          </Interprete>

          <Interprete
            nombre="Al Pacino"
            foto="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Al_Pacino.jpg/220px-Al_Pacino.jpg"
          >
            Al Pacino es un actor y director de cine estadounidense...
          </Interprete>
           */}

      </Contenedor>
    </>
  );
}

export default App;
