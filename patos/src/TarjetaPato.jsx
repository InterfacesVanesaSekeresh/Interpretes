"use strict";
/**
 * TarjetaPato: Componente que representa una tarjeta individual de pato 
 *  
 */
function TarjetaPato(props) {
  const { nombre, foto, descripcion, categoria, precio } = props;
  return (
    <>
      {/* Navegacion con tabulador (tabIndex) y por si el user hace mucho zoom, para que se adapte (className:...)*/}
      <article
        tabIndex="0"
        aria-label={`${nombre}`}
        className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col items-start gap-3 p-4 rounded-lg bg-gray-50"
      >
        <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
          <img
            src={foto}
            alt={`Foto de ${nombre}`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* Texto alternativo para lectores de pantalla */}
          <figcaption className="sr-only">{props.children}</figcaption>
        </figure>

        <section>
          {/* Bloque informativo del pato */}
          <article>
            <h3 className="font-heading-h5 font-(--heading-h5-font-weight) text-color-black-1 text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] whitespace-nowrap [font-style:var(--heading-h5-font-style)]">
              <strong>{nombre}</strong>
            </h3>
            <p className="contenedor__texto-normal">{descripcion}</p>
            <p className="contenedor__texto-normal">{categoria}</p>
            <p className="contenedor__precio">{precio}</p>
          </article>
        </section>
      </article>
    </>
  );
}

export default TarjetaPato;
