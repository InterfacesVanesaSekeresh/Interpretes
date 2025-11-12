function InterpretePeli10(props) {
    const { nombre, foto, esNota10 } = props;
    return (
        <>
            <div className="contenedor__foto">
                <img src={foto} alt={nombre}/>
                <div>
                    <h2 className={esNota10 ? 'text-red-600' : ''}>{nombre}</h2>
                    <p>{props.children}</p>
                </div>
            </div>
        </>
    )
}

export default InterpretePeli10;