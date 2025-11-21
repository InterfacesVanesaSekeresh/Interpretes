import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";

//La parte del header ( Está inicio, películas, intérpretes y admin)
function Nav() {
  // Estado del menú: abierto o cerrado
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Botón hamburguesa. Una vez abierto no aparece el menu 
      //aria-label para accesibilidad
      //aria-expanded indica si el menú está abierto o cerrado
      //aria-controls indica el id del elemento que controla (el menú)
      //className="md:hidden" para que solo se vea en pantallas pequeñas
      */}
      {!open && (
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="menu"
        >
          ☰
        </button>
      )}
      {/* Menú controlado por el estado, hay que pasarle el mismo id que se usa en
          //aria-controls="menu"
          //md:flex: en pantallas grandes no se ve el menú hambuerguesa
      */}
      <nav id="menu" className={`${open ? "block" : "hidden"} md:flex`}>
        <NavLink
          to="/"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
          onClick={() => setOpen(false)}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/pelicula"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
          onClick={() => setOpen(false)}
        >
          Películas
        </NavLink>

        <NavLink
          to="/interprete"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
          onClick={() => setOpen(false)}
        >
          Intérpretes
        </NavLink>

        <NavLink
          to="/admin"
          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
          onClick={() => setOpen(false)}
        >
          Admin
        </NavLink>
      </nav>
    </>
  );
}

export default Nav;
