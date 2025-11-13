import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/inicio">Inicio</Link>
      <Link to="/pelicula">Películas</Link>
      <Link to="/interprete">Intérpretes</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}
export default Nav;