function Interprete(props){
    const { nombre, foto } = props;
    return (
        <>
            <div className="contenedor__foto">
                <img src={foto} alt={nombre} />
                <div>
                    <h2>{nombre}</h2>
                    <p>{props.children}</p>
                </div>
            </div>
        </>
    )
}

export default Interprete