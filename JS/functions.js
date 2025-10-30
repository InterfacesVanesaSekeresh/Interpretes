
//De otra forma
function cantidadDeArtistasPorInstrumento1(artistasArray){
    const conteo = {};
    for(const artista of artistasArray){
        const instrumento = artista.instrumento;

        
    }
}





function artistasSolistas(artistasArray){
    return artistasArray.filter(a => a.solista);
}

console.log(artistasSolistas(artistas));

function artistasPorEdad(artistaEdad, artistasArray){
    return artistasArray.filter(a => a.edad === artistaEdad);
}


console.log(artistaEdad(23, artistas));

function cantidadDeArtistasPorInstrumento(artistasArray){
    const conteo = {};
    //Sacar cuentas = Usar reduce (ACC = ArrayInstrumentos)
   return artistasArray.reduce((acc, a) => {
        acc[a.instrumento] = (acc[a.instrumento] || 0) + 1;
        return acc;
    }, []);
}



function cantidadDeArtistasPorGenero(artistasArray){
    return artistasArray.reduce((acc, a) => {
        acc[a.genero] =  (acc[a.genero] || 0) + 1;
        return acc;
    }, {});
}

function artistasConMasDiscosQue(cantidadDiscos, artistasArray){
    //Con .length consegimos el tamaño los discos
    const discoMas = artistasArray.filter(a => a.discos.length > cantidadDiscos);
    return discoMas.sort((a,b) => a.discos.length - b.discos.length);
}

console.log(artistasConMasDiscosQue(1, artistas))

function artistaConMasEntradasVendidas(artistasArray){
    return artistasArray.reduce((aMax, act) => 
        act.ultimoRecital.entradasVendidas > (aMax?.ultimoRecital?.entradasVendidas || 0) ? act : aMax
    , null );
}

function artistaConMayorRecaudacion(artistasArray){
    return artistasArray.reduce((aMax, act) => {
        const recaudoA = act.ultimoRecital.entradasVendidas * act.ultimoRecital.costoEntradas;
        const recaudoM = aMax.ultimoRecital.entradasVendidas * aMax.ultimoRecital.costoEntradas;
        return recaudoA > recaudoM ? act : aMax;
    }, artistasArray[0]);
}

function artistasConDiscoEnAnyo(artistasArray, anyo){
    const artistAnyo = artistasArray.filter(a => a.ultimoRecital.anio > anyo);
    return artistAnyo;
}

function artistaConMasCopias(artistas) {
    return artistas.reduce((max, a) => {
        const totalCopias = a.discos.reduce((sum, d) => sum + d.copiasVendidas, 0);
        const maxCopias = max ? max.discos.reduce((sum, d) => sum + d.copiasVendidas, 0) : 0;
        return totalCopias > maxCopias ? a : max;
    }, null);
}


