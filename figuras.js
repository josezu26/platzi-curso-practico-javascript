// Codigo del cuadrado
console.group("Cuadrado");


function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();


// Codigo del circulo
console.group("Circulos");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log(`PI es: ${PI}cm`);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
function areaCirculo(radio){
    return (radio * radio) * PI
}

console.groupEnd();

//************************Aqui interactuamos con el HTML*************************

//CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetroDelCuadrado = perimetroCuadrado(value);
    alert(perimetroDelCuadrado);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const areaDelCuadrado = areaCuadrado(value);
    alert(areaDelCuadrado);
}

//TRIANGULO
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("lado1Triangulo").value;
    const lado2 = document.getElementById("lado2Triangulo").value;
    const base = document.getElementById("baseTriangulo").value;
    const altura = document.getElementById("alturaTriangulo").value;
    
    const perimetroDelTriangulo = perimetroTriangulo(lado1, lado2, base);
    alert(perimetroDelTriangulo);
}

function calcularAreaTriangulo() {
    const lado1 = document.getElementById("lado1Triangulo").value;
    const lado2 = document.getElementById("lado2Triangulo").value;
    const base = document.getElementById("baseTriangulo").value;
    const altura = document.getElementById("alturaTriangulo").value;

    const areaDelTriangulo = areaTriangulo(base, altura);
    alert(areaDelTriangulo);
}

//CIRCULO
function calcularDiametroCirculo(){
    const radioCirculo = document.getElementById("radioCirculo").value;

    const diametroDelCirculo = diametroCirculo(radioCirculo);
    alert(diametroDelCirculo);
}

function calcularPerimetroCirculo(){
    const radioCirculo = document.getElementById("radioCirculo").value;

    const perimetroDelCirculo = perimetroCirculo(radioCirculo);
    alert(perimetroDelCirculo);
}

function calcularAreaCirculo(){
    const radioCirculo = document.getElementById("radioCirculo").value;

    const areaDelCirculo = areaCirculo(radioCirculo);
    alert(areaDelCirculo);
}

function calcualrAlturaTrianguloIso(){

    const lado1Iso = Number(document.getElementById("lado1TrianguloIso").value);
    const lado2Iso = Number(document.getElementById("lado2TrianguloIso").value);
    const baseIso = Number(document.getElementById("baseTrianguloIso").value);
    const iguales = lado1Iso == lado2Iso;
    let altura;

    if((iguales == true) && (lado1Iso != baseIso)){
        altura=Math.sqrt(Math.pow(lado1Iso,2)-(Math.pow(baseIso,2)/4));
        alert(`La altura es: ${altura}`);

    } else {
        alert("Los valores ingresados no corresponden a un triangulo isosceles!");
    }

}
