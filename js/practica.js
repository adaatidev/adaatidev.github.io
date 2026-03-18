// EJERCICIO 1, 2
let nombre = prompt("Introduzca su nombre");
let apellido = prompt("Introduzca su apellido");
alert(`Bienvenida a mi página ${nombre} ${apellido}`);


// EJERCICIO 3
let numero1 = Number(prompt("Introduzca un número"));
let numero2 = Number(prompt("Introduzca otro número"));
let resultado = numero1 + numero2;
alert(`El resultado es ${resultado}`);


// EJERCICIO 4
let numeroEj4 = Number(prompt('Por favor ingresa un numero: '));
let numeroTriple = numeroEj4 * 3;
console.log(`El triple de este número es: ${numeroTriple}`);


// EJERCICIO 5
let texto = prompt("Introduzca un texto");
alert(`El largo del texto es ${texto.length}`);


///////////////////////////////////////////////////////////////////


// EJERCICIO 8
let nombreIngresado = prompt("Introduzca su nombre");
if (nombreIngresado.length == 0) {
    let nombreIngresado = prompt('No ha introducido ningún nombre, por favor ingrese su nombre: ');
}
alert (`Bienvenida ${nombreIngresado}`);


// EJERCICIO 9
let numeroEj9 = Number(prompt('Por favor ingresa un número y te diré si es par o impar: '));
if (numeroEj9 % 2 == 0) {
alert(`El número ingresado: ${numeroEj9} es par`);
} else {
alert(`El número ingresado: ${numeroEj9} es impar`);
}


// EJERCICIO 10


// EJERCICIO 11
const numeroSecreto = 8;
const numeroUsuario = parseInt(prompt('Por favor, adivine el numero que estoy pensando. Ingreselo y veremos: '));

if (numeroSecreto === numeroUsuario) {
    alert('Adivinaste el número!');
} else if (numeroSecreto > numeroUsuario) {
    alert('Perdiste, pero te doy una pista! El numero ingresado es menor al número secreto');
} else {
    alert('Perdiste, pero te doy una pista! El numero ingresado es mayor al número secreto');
}


// EJERCICIO 12
let cantidadTragos = (Number (prompt('¿ Cuántos tragos has tomado ?'))) > 0 ? alert('No puedes conducir') : alert('Conductor responsable');


// EJERCICIO 13 - CALCULADORA


// EJERCICIO 18
let ensaladaDeFrutas = ['manzana', 'banana', 'anana', 'naranja', 'kiwi'];
for (let frutas of ensaladaDeFrutas) {
    console.log(`Las frutas que hay en la ensalada son: ${frutas} `)
}


// EJERCICIO 22
let nombres = ["Analia", "Carlos", "Andres", "Agustin", "Mateo","Ana"];

console.info(nombres);

let nombreMasLargo = "";

let nombreMasCorto = "";

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length >= nombreMasLargo.length) {
        nombreMasCorto = i;
        nombreMasLargo = nombres[i];
    }
}

console.log(`El nombre más largo de la lista es: ${nombreMasLargo}`);


// EJERCICIO 24
function calculoMayor(num1,num2) {
    if (num1>num2) {
        return console.info(`${num1} es mayor que ${num2}.`);
    } else if (num1 < num2) {
        return console.info(`${num1} no es mayor a ${num2}, sino que es menor.`);
    } else {
        console.info(`${num1} no es mayor a ${num2}, son iguales.`);
    }
}


// EJERCICIO 25
