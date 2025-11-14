function Tarjeta({ foto, nombre, esNota10, clasificacion, children }) {
  return (
    <article
      tabIndex="0"
      className="flex flex-col items-start gap-3 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
      aria-label={`${nombre}${esNota10 ? ', destacado' : ''}`}
    >
      <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
        <img
          src={foto}
          alt={`Imagen de ${nombre}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <figcaption className="sr-only">{children}</figcaption>
      </figure>

      <header>
        <h2 className={`text-lg font-bold ${esNota10 ? "text-red-600" : "text-gray-800"}`}>
          <strong>{nombre}</strong>
          {esNota10 && <em> – Intérprete destacado</em>}
        </h2>
      </header>

      {/* Mostrar clasificación si existe */}
      {clasificacion && <p>{clasificacion}</p>}

      {/* Mostrar children si existe (ej. recaudación o biografía) */}
      {children && <p>{children}</p>}
    </article>
  );
}

export default Tarjeta;
