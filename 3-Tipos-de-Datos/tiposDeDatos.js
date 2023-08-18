/*

Tipos de datos que podemos guardar en las variables:

-> string : Cadena de texto.
-> number : Números.
-> boolean : Booleano (true o false).
-> object : Objeto.
-> function : Funciones.

-> null : Valor Nulo.
-> undefined : Valor sin definir (es el valor por defecto).

*/
let cadenaDeTexto = "Texto y 'más texto'";
let numeros = 100;
let decimales = 14.13;
let usuarioConectado = false;

// Arrays - Arreglos
/*
Nos permiten guardar multiples valores de distintos tipos de datos, incluso arreglos dentro de arreglos.
*/

const nameList = ["Alicia", "JJ", "Prince", 21];
//console.log(nameList);

// Objetos
/*
Nos permiten guardar datos en parejas, (Propiedad y valor)

Ejemplo:
*/
const person = {
  name: "Carlos",
  age: 33,
  carro: {
    marca: "Ferrari",
    color: "Negro",
  },
};
//console.log(person);
/*
Podemos acceder a distintos valores usando .
*/
//console.log(person.age);
//console.log(person.carro);

// Funciones
function printHello() {
  console.log("Hello");
}
//printHello();

// Null
/*
Normalmente se usa cuando queremos especificar que un valor sea nulo.
*/
let nullValue = null;

// Undefined
/*
Se usa para indicarnos que un valor no esta definido.
*/
let undefinedValue = undefined;
