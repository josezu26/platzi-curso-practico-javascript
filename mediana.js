function calcularMediaAritmetica(lista){ 
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

const lista1 = [
    100,
    200,
    500,
    400000000,
];


function calcularMediana(listaM){

    listaM.sort((a,b)=>a-b);

    const mitadLista = parseInt(listaM.length / 2);

    let mediana;

    if(esPar(listaM.length)){
        const elemento1 = listaM[mitadLista - 1];
        const elemento2 = listaM[mitadLista];
        mediana = calcularMediaAritmetica([elemento1, elemento2])
    } else {
        mediana = listaM[mitadLista];
    }

    return mediana;
}


   
