/* const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]; */

function calcularModa(lista1){
    const lista1Count = {};

    lista1.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] = lista1Count[elemento] + 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        (valorAcumulado, nuevoValor)=>{
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = lista1Array[lista1Array.length - 1];

    //return parseInt(moda[0]); --FUNCIONAN IGUAL EL PARSEINT() Y EL NUMBER()
    return Number(moda[0]);
}