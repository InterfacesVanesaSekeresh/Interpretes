function Interprete(props) {
    const { nombre, foto, esNota10 } = props;
  return (
    <>
      <article
        tabIndex="0"
        aria-label={`Intérprete ${nombre}${esNota10 ? ", destacado" : ""}`}
        className="flex flex-col items-start gap-3 p-4 rounded-lg …"
      >
        <figure
          className="w-full aspect-square rounded-lg bg-gray-100
            overflow-hidden"
        >
          <img
            src={foto}
            alt={`Foto de ${nombre}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <figcaption className="sr-only">{props.children}</figcaption>
        </figure>

        <header>
          <h2>
            <strong>{nombre}</strong>
            {esNota10 && <em> – Intérprete destacado</em>}
          </h2>
        </header>

      </article>
    </>
  );
}

export default Interprete;
