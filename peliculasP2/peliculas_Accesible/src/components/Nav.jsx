import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative" aria-label="Menú principal">
      {/* Hamburguesa solo en móvil */}
      <button
        onClick={toggleMenu}
        className="text-2xl text-(--color-primary) px-2 py-1 border rounded md:hidden"
        aria-controls="menuMovil"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? "x" : "☰"}
      </button>

      {/* Menú móvil bajo header*/}
      {isOpen && (
        <ul
          id="menuMovil"
          className="absolute top-full left-1/20 -translate-x-1/2 w-full bg-black text-white z-50 flex flex-col items-center gap-6 px-15 py-10 rounded-lg shadow-xl md:hidden"
        >
          <li role="none">
            <NavLink
              to="/inicio"
              className="block px-3 py-2 rounded-md font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-write)]"
              role="menuitem"
            >
              Inicio
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/pelicula"
              className="block px-3 py-2 rounded-md font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-write)]"
              onClick={() => setIsOpen(false)}
              role="menuitem"
            >
              Películas
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/interprete"
              className="block px-3 py-2 rounded-md font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-write)]"
              onClick={() => setIsOpen(false)}
              role="menuitem"
            >
              Intérpretes
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              to="/admin"
              className="block px-3 py-2 rounded-md font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-write)]"
              onClick={() => setIsOpen(false)}
              role="menuitem"
            >
              Admin
            </NavLink>
          </li>
        </ul>
      )}

      {/* Menú escritorio */}
      <ul className="hidden md:flex gap-4" role="menubar">
        <li role="none">
          <NavLink
            to="/inicio"
            className="px-3 py-2 rounded-md font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-write)]"
            role="menuitem"
          >
            Inicio
          </NavLink>
        </li>
        <li role="none">
          <NavLink
            to="/pelicula"
            className="px-3 py-2 rounded-md font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-write)]"
            role="menuitem"
          >
            Películas
          </NavLink>
        </li>
        <li role="none">
          <NavLink
            to="/interprete"
            className="px-3 py-2 rounded-md font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-write)]"
            role="menuitem"
          >
            Intérpretes
          </NavLink>
        </li>
        <li role="none">
          <NavLink
            to="/admin"
            className="px-3 py-2 rounded-md font-bold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-write)]"
            role="menuitem"
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
