import { act } from "react";
import GlobalContent from "./GlobalContent.jsx";
import TarjetaPato from "./TarjetaPato.jsx";

import "./data/ducklyn.js";
import ducklyn from "./data/ducklyn.js";

function App() {
  return (
    <>

      <GlobalContent>
      <h1 className="contenedor__titulo">Nuestros Patos</h1>
      <h2 className="contenedor__texto-largo">Coloridos, divertidos y coleccionables</h2>
        {
        ducklyn.flat().map((pato, index) => (
        <TarjetaPato 
          key={index} 
          nombre={pato.nombre} 
          foto={pato.imagen}
          descripcion={pato.descripcion} 
          categoria={pato.categoria}
          precio={pato.precio}
          >
          

        </TarjetaPato>
        ))
      }

      </GlobalContent>
    </>
  );
}

export default App;
