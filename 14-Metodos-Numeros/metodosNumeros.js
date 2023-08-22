/* toString()
Convierte un dato de tipo numerico a un dato de tipo cadena de texto. 
*/
const numberType = 10;
console.log(numberType, typeof numberType);
const stringType = numberType.toString();
console.log(stringType, typeof stringType);

/* toFixed()
Permite obtener un número con la cantidad de decimales especificados.
*/
const pi = 3.1416;
console.log(pi.toFixed(3));

/* parseInt() - parseFloat()
Intenta transformar un valor a un entero - Transforma un valor a un flotante.
*/
// const number1 = parseFloat(prompt("Ingrese un número"));
// const number2 = parseFloat(prompt("Ingrese un número"));
// console.log(number1 + number2);

/* Math.floor() 
Redondea hacia abajo un número.
*/
console.log(Math.floor(13.14));

/* Math.ceil() 
Redondea hacia arriba un número.
*/
console.log(Math.ceil(13.14));

/* Math.round() 
Redondea hacia el entero más cercano.
*/
console.log(Math.round(13.14));

/* Math.random() 
Genera un número al azar entre 0 - 100.
*/
const randomNumber = Math.random();
console.log(Math.floor(randomNumber * 100));
