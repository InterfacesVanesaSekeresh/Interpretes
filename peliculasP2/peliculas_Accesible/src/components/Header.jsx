import Nav from "./Nav.jsx";

//La parte de arriba a la izquierda (pone interpretes)
//"LLama" a nav
function Header() {
  return (
    <header className="w-full bg-black text-white py-4 shadow-md">
      <article className="container mx-auto flex justify-between items-center px-4">
        <section>
          <h1 className="text-xl font-semibold tracking-wide">Interpretes</h1>
        </section>
        <Nav />
      </article>
    </header>
  );
}
export default Header;
