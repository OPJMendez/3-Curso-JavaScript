const colorsList = ["red", "blue", "pink", "yellow", "brown"];

//      PROPIEDADES
/*
.length
-> Nos permite conocer la cantidad de elementos de un arreglo.
*/
console.log(colorsList.length);

/*
.toString()
-> Nos permite transformar un arreglo a una cadena de texto.
*/
colorsList.toString();

/*
.join
-> Nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
*/
console.log(colorsList.join("-"));

/*
.sort
-> Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica y arreglos de tipo numerico ordenados en orden ascendente.
*/
const lettersList = ["E", "J", "X", "M", "H"];
const numbersList = [100, 54, 88, 66, 11, 74, 58, 21, 69, 1, 4, 78, 85, 1455];
console.log(lettersList.sort());
console.log(numbersList.sort());

/*
.reverse()
-> Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica y arreglos de tipo numerico ordenados en orden descendente.
*/
console.log(lettersList.reverse());
console.log(numbersList.reverse());

/*
.concat()
-> Nos permite unir o juntar dos arreglos en uno solo.
*/
const numbersAndLetters = lettersList.concat(numbersList);
console.log(numbersAndLetters);

/*
.push()
-> Nos permite agregar un elemento al final de un arreglo.
*/
colorsList.push("gold");
console.log(colorsList);

/*
.pop()
-> Nos permite eliminar ultimo elemento de un arreglo.
*/
colorsList.pop();
console.log(colorsList);

/*
.shift()
-> Nos permite eliminar el primer elemento de un arreglo.
*/
/*
.unshift()
-> Nos permite agregar un elemento al inicio de un arreglo y empuja los elementos.
*/
const daysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(daysList);
daysList.shift();
console.log(daysList);
daysList.unshift("newSun");
console.log(daysList);

/*
.splice()
-> Nos permite agregar un elementos en cualquier lugar del arreglo.

Recibe tres parametros:

-> 1- Posicion donde queremos comenzar a insertar los elementos.

-> 2- Si queremos eliminar elementos del arreglo desde la posicion indicada.

-> 3- Los elementos a insertar
*/
const salaryList = [1200, 5500, 7800, 12000, 26000];
// console.log(SalaryList);
salaryList.splice(0, 0, 3600, 4750);
console.log(salaryList);

/*
.slice()
Nos copiar una parte de un arreglo a otro.

-> 1- Posicion desde donde queremos copiar.

-> 2- Hasta antes de que elemento copiar.
*/
const fruitList = ["Fresa", "Mango", "Piña", "Banana"];
const favoriteFruitList = fruitList.slice(1, 3);
console.log(favoriteFruitList);
