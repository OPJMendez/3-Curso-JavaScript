/* Bucles:
Son estructuras que nos permiten repetir boques codigo las veces que necesitemos
 */
const namesList = ["Carlos", "Pepe", "Mateo"];

/* ForEach -> por cada elemento del arreglo, haz esto 
es un metodo para arreglos.
*/

// namesList.forEach((names) => {
//   console.log(names);
// });

/* Ciclo for:
Repite un bloque de código mientras se cumpla una condición.

Expresión 1 -> Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.

Expresión 2 -> Una condición, mientras se cumpla se ejecutara el bloque de código.

Expresión 3 -> Esta expresión se ejecuta siempre y despues de que se ejecute el bloque de código.
*/

// for (let index = 100; index > 1; index--) {
//   console.log();
// }

// comieza con un valor de 100
// mientras que index sea mayor a 1...
// decremanta index hasta que su valor sea 1

/* 
La primera expresión normalmente es una variable que define donde comienza el código
*/

/* 
La segunda expresión indica cuando queremos ejecutar el código, es una condición. */

/* 
La tercera expresión incrementa o decrementa la condición, si no , seria un bucle infinito.

Esta variable podemos aumentarla o decrementarla como queramos :
index + 5
index - 10
debemos guardarlo de esta forma:
index = index + 5
index = index - 10
*/
for (let index = 0; index < namesList.length; index++) {
  console.log(namesList[index]);
}
