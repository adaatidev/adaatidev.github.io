/*      // EJERCICIO 01  
        let ciudad = "Sevilla"; 
        const pais = "España"; 
        console.log(`Vivo en ${ciudad}, ${pais}.`);

        // EJERCICIO 02
        let precio = 8;
        const iva = 0.21;
        let precioFinal = (precio + precio * iva);
        console.log(`PRECIO CON IVA: ${precioFinal}`);

        // EJERCICIO 03
        let edad = 19;
        const dias = 365;
        let diasVividos = 19 * 365;
        console.log(`Has vivido aproximadamente ${diasVividos} días`);

        // EJERCICIO 04
        let nombre = prompt(`Introduzca su nombre de usuario:`);
        alert(`¡Bienvenida al curso de JS, ${nombre}!`);

        // EJERCICIO 05
        let num1 = prompt(`Introduzca un número:`);
        let num2 = prompt(`Introduzca otro número:`);
        let suma = parseInt(num1) + parseInt(num2);
        alert(suma);

        // EJERCICIO 06
        let miEdad = 19;
        let mayorDeEdad = miEdad >= 18;
        console.log("¿Es mayor de edad?:", mayorDeEdad); 
        
        // EJERCICIO 07
        let nombreInvitado = "Admin";
        console.log(nombreInvitado === "Admin" ? "Acceso total" : "Acceso limitado");      
        
        // EJERCICIO 08
        let numero = prompt(`Introduzca un número:`);
        for (let i = 1; i <= numero; i++) {
            if (i % 2 !== 0) {
            console.log(i);
            }
        } */
// ======================== DOM ====================================================
/* //EJERCICIO 01
const contenedor = document.getElementById("contenedor");

const titulo = document.createElement("h1");
titulo.textContent = "Bienvenida    ";

const spanUsuario = document.createElement("span");
titulo.appendChild(spanUsuario);

const inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.placeholder = "Nombre de usuario";

const inputPass = document.createElement("input");
inputPass.type = "password";
inputPass.placeholder = "Contraseña";

contenedor.appendChild(titulo);
contenedor.appendChild(inputNombre);
contenedor.appendChild(inputPass);

function ejecutarLogin() {
    const usuario = inputNombre.value;
    const password = inputPass.value;

    if (usuario === "admin" && password === "1234") {
        spanUsuario.textContent = usuario;
        spanUsuario.style.color = "pink";
        alert("Acceso concedido");
    } else {
        spanUsuario.textContent = "";
        alert("Acceso denegado. Inténtalo de nuevo.");
    }
}

// EJERCICIO 02
const colores = ["red", "green", "blue", "yellow"];
for (let i = 0; i < colores.length; i++) {
    let colorActual = colores[i];
    let boton = document.createElement("button");
    boton.textContent = colorActual;
    boton.style.backgroundColor = colorActual;
    boton.addEventListener("click", function() {
        titulo.style.color = colorActual;
    });
    document.body.appendChild(boton);
} */
// ======================== JAVASCRIPT ====================================================
/* // EJERCICIOS 1: JAVASCRIPT
const persona = {
    nombre: "Ada",
    edad: 19
};
console.log(`Mi nombre es ${persona.nombre} y tengo ${persona.edad} años`);
//---------------------------------------------------------------------------
const numero1 = 8;
const numero2 = 4;
console.log(`Números utilizados: ${numero1}, ${numero2}`);
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2); */

/* // EJERCICIOS 2: JAVASCRIPT
// 1.
let numero = 8;
console.log(numero);
if (numero % 2 == 0) {
    console.log(`Par`);
} else {
    console.log(`Impar`);
};
// 2.
let edad = prompt(`Introduzca su edad:`);
if (edad >= 18) {
    console.log(`Puede votar`);
}else{
    console.log(`No puede votar`);
};
// 3.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// 4.
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// 5.
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma);
// 6.
let numeroUsuario = prompt(`Introduzca un número: `);
for (let i = 1; i <= numeroUsuario; i++) {
    console.log(i);
}
for (let i = 1; i <= numeroUsuario; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
let sumaUsuario = 0;
for (let i = 1; i <= numeroUsuario; i++) {
    sumaUsuario += i;
}
console.log(sumaUsuario); */

/* // EJERCICIOS 3: JAVASCRIPT
// 1.
function saludar(nombre) {
    return "Hola, " + nombre;
}
let mensaje = saludar("Raquel");
console.log(mensaje);

// 2.
function promedio(num1, num2){
    return (num1+num2)/2;
}
let media = promedio(4,8);
console.log(media);

// 3.
function tipo (numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}
let numeroEs = tipo(8);
console.log(numeroEs);

// 4.
function comprobacionBisiesto(ano){
    if (ano % 4 == 0) {
        return "Es bisiesto";
    } else {
        return "No es bisiesto"
    }
}
let anoActual = comprobacionBisiesto(2026);
console.log(anoActual); */

/* // EJERCICIOS 4: JAVASCRIPT
// 1.
let numeros = [1,2,3,4,5];
numeros.push(6); // AÑADE NÚMERO AL FINAL DE LA LISTA
numeros.shift(); // ELIMINA EL PRIMER ELEMENTO DE LA LISTA
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// 2.
function buscarMayor(listaNumeros) {
    let mayor = listaNumeros[0];
    for (let i = 1; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > mayor) {
            mayor = listaNumeros[i];
        }
    }
    return mayor;
}
let misNumeros = [12, 45, 2, 88, 8, 33];
let elMasGrande = buscarMayor(misNumeros);
console.log("El número mayor es: " + elMasGrande);

// 3.
let persona = {
    nombre: "Ada",
    edad: 19,
    ciudad: "Sevilla"
};

console.log("Nombre: "+ persona.nombre);
console.log("Edad: "+ persona.edad);
console.log("Ciudad: "+ persona.ciudad);

persona.ocupacion = "Estudiante";

delete persona.ciudad;

console.log(persona);

// 4.
function mostrarDetalles(objeto) {
    let resultado = "";

    for (let clave in objeto) { // recorre cada propiedad del objeto
        let valor = objeto[clave];
        resultado += clave + ": " + valor + "\n";
    }
    return resultado;
}

let coche = {
    marca: "Tesla",
    modelo: "Model 3",
    motor: "Eléctrico"
};

console.log(mostrarDetalles(coche)); */

/* // EJERCICIOS 5: JAVASCRIPT
// 1.
const parrafo = document.getElementById("parrafo");
const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    parrafo.textContent = "Hola mundo";
});

// 2.
const lista = document.getElementById("lista");

for (let i = 1; i <= 5; i++) {
    let nuevoItem = document.createElement("li");
    nuevoItem.textContent = "Elemento número " + i;
    lista.appendChild(nuevoItem);
}
function eliminarUltimo() {
    const ultimo = lista.lastElementChild;
        if (ultimo) {
            ultimo.remove();
        } else {
            alert("Ya no quedan más elementos para eliminar.");
        }
} */

/* // EJERCICIO 6: JAVASCRIPT
const listaEdades = [];
const anioActual = new Date().getFullYear();

const inputAnio = document.getElementById("anioNacimiento");
const btnEnviar = document.getElementById("btnEnviar");
const divMensaje = document.getElementById("mensaje");
const divMedia = document.getElementById("media");

inputAnio.addEventListener("focusin", function() {
    divMensaje.textContent = "";
});

btnEnviar.addEventListener("click", function() {
    const anioUsuario = parseInt(inputAnio.value);
    const edad = anioActual - anioUsuario;

    if (isNaN(anioUsuario) || edad < 0 || edad > 120) {
        divMensaje.textContent = "Error: Introduce un año válido (máximo 120 años de edad)";
        divMensaje.style.color = "red";
        return;
    }

    if (edad >= 18 && edad < 67) {
        divMensaje.style.color = "green";
    } else {
        divMensaje.style.color = "red";
    }

    divMensaje.textContent = "Tu edad es: " + edad + " años.";
    listaEdades.push(edad);
    calcularYMostrarMedia();
});

function calcularYMostrarMedia() {
    let suma = 0;
    for (let i = 0; i < listaEdades.length; i++) {
        suma += listaEdades[i];
    }
            
    let media = suma / listaEdades.length;
    divMedia.textContent = "Media de edad actual: " + media.toFixed(2);
} */

/* // EJERCICIO 7: JAVASCRIPT
const input = document.getElementById("tareaInput");
const botonAnadir = document.getElementById("btnAnadir");
const lista = document.getElementById("listaTareas");

botonAnadir.addEventListener("click", function() {
    const texto = input.value;

    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = texto + " ";

    const botonX = document.createElement("button");
    botonX.textContent = "X";

    botonX.addEventListener("click", function() {
        nuevoLi.remove();
    });

    nuevoLi.appendChild(botonX);
    lista.appendChild(nuevoLi);

    // LIMPIA INPUT
    input.value = "";
}); */

/* // EJERCICIOS 1: JAVASCRIPT + HTML
const inputNombre = document.getElementById("nombreInput");
const inputEdad = document.getElementById("edadInput");
const boton = document.getElementById("btnPresentar");
const parrafo = document.getElementById("mensajeResultado");


boton.addEventListener("click", function() {
    const nombre = inputNombre.value;
    const edad = inputEdad.value;
    parrafo.textContent = "Mi nombre es " + nombre + " y tengo " + edad + " años.";      
}); */


/* const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const parrafo = document.getElementById("resultado");

function obtenerValores() {
const n1 = parseInt(input1.value);
const n2 = parseInt(input2.value);
}

document.getElementById("suma").addEventListener("click", function() {
    const valores = obtenerValores();
        parrafo.textContent = "Resultado: " + (valores.n1 + valores.n2);
});

document.getElementById("resta").addEventListener("click", function() {
    const valores = obtenerValores();
    parrafo.textContent = "Resultado: " + (valores.n1 - valores.n2);
});

document.getElementById("multiplicacion").addEventListener("click", function() {
    const valores = obtenerValores();
        parrafo.textContent = "Resultado: " + (valores.n1 * valores.n2);
});

document.getElementById("division").addEventListener("click", function() {
    const valores = obtenerValores();
    parrafo.textContent = "Resultado: " + (valores.n1 / valores.n2);
}); */

/* const usuario = {
    nombre: "Alberto",
    apellidos: "Ramos",
    edad: 26,
    ciudad: "Granada"
};

function serializar(obj) {
    const jsonString = JSON.stringify(obj);
    console.log("JSON Serializado:", jsonString);
    return jsonString;
}

function deserializar(jsonStr) {
    const objetoRecuperado = JSON.parse(jsonStr);
    console.log("Objeto Deserializado:", objetoRecuperado);
    return objetoRecuperado;
}

document.getElementById("btnAccion").addEventListener("click", function() {
    const datosEnJSON = serializar(usuario);
    document.getElementById("jsonResult").textContent = datosEnJSON;

    const datosRecuperados = deserializar(datosEnJSON);
            
    document.getElementById("textoRecuperado").textContent = `Recuperado: nombre:${datosRecuperados.nombre}, apellidos:${datosRecuperados.apellidos}, edad:${datosRecuperados.edad}, ciudad:${datosRecuperados.ciudad}`;

    const tabla = document.getElementById("tablaDatos");
    const cuerpo = document.getElementById("cuerpoTabla");
            
    tabla.style.display = "table";
    cuerpo.innerHTML = `
        <tr>
            <td>${datosRecuperados.nombre}</td>
            <td>${datosRecuperados.apellidos}</td>
            <td>${datosRecuperados.edad}</td>
            <td>${datosRecuperados.ciudad}</td>
        </tr>
    `;
}); */