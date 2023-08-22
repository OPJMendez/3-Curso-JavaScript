// .indexof()
// obtenemos el primer index de un elemento.
// Si no hay elemento nos retorna -1.
const namesList = [
  "Luis",
  "Pedro",
  "Ana",
  "Carlos",
  "Maria",
  "Dulfran",
  "Lucas",
  "Laura",
  "Vanessa",
  "Sofia",
  "Kevin",
  "Maria",
  99,
];
console.log(namesList.indexOf("Maria"));

/* .lastindexof()
Obtenemos el ultimo index de un elemento.
*/
console.log(namesList.lastIndexOf("Maria"));

/* .foreach()
Nos permite ejecutar una función por cada elemento.
*/
namesList.forEach((name, index) => {
  console.log(`Hola, ${name}, tú posición es: ${index}`);
});

/* .find()
Nos permite recorrer un arreglo y devuelve el priner elemento que retornemos.
*/
const userName = namesList.find((name) => {
  if (name[0] === "M") {
    return name;
  }
});
console.log(userName);

/* .map()
Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo en base a los resultados de esa función.
*/
const namesListUpper = namesList.map((nameToUpper) => {
  return nameToUpper.toUpperCase();
});
console.log(namesListUpper);

/* .filter()
Nos permite ejecutar una función por cada elemento y crear un arreglo en base a los resultados y a una condición de esa función.
*/

const namesFourLetters = namesList.filter((FourLetters) => {
  if (FourLetters.length <= 4) {
    return FourLetters;
  }
});
console.log("------");
console.log(namesFourLetters);

/* .includes()
Nos permite saber si el arreglo contiene un elemento especificado.

Si se trabaja con strings distinguira entre mayusculad y minusculas.
*/
console.log(namesList.includes("Ana"));

/* .every() 
Nos permite ejecutar un condicional sobre cada elemento y nos devuelve true si TODOS los elementos cumplieron la condición.
*/
const stringType = namesList.every((userNames) => {
  if (typeof userNames === "string") {
    return true;
  } else {
    return false;
  }
});
console.log(stringType);

/* .some() 
Nos permite ejecutar un condicional sobre cada elemento y nos devuelve true si ALGUN elemento cumpliO la condición.
*/
const stringTypeTwo = namesList.some((userNames) => {
  if (typeof userNames !== "string") {
    return true;
  } else {
    return false;
  }
});
console.log(stringTypeTwo);
