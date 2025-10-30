import Contenedor from "./Contenedor";
import Interprete from "./Interprete";

function App() {
  return (
    <>
      <h1 className="contenedor__h1">Mis Interpretes</h1>
       <h1 className="contenedor__large-text">Listado de Interpretes disponibles</h1>
      <Contenedor>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8">
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
        </div>
      </Contenedor>
    </>
  );
}

export default App;
