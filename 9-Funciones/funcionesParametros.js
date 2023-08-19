/*
Los parametros no sirven para transmitirle información a la función, podemos hacer nuestra función más dinamica.

Parametros: los valores especificados en la función.
Argumentos: Los valores que le pasamos a la función cuando la invocamos.
*/

// Sintaxis
// NO IMPORTA EL TIPO DE DATO.
const userGreting = (name) => {
  console.log(`Hello, ${name}. How are u?`);
};
userGreting("JJ");

// SI QUEREMOS DEFINIR EL VALOR DEL PARAMETRO DESDE LA FUNCIÓN
/*
const userGreting = (name = 'ALICIA') => {
  console.log(`Hello, ${name}. How are u?`);
};
userGreting();
*/

// MULTIPLES PARAMETROS
const calculator = (tipo, number1, number2) => {
  if (tipo === "suma") {
    console.log(number1 + number2);
  } else if (tipo === "resta") {
    console.log(number1 - number2);
  }
};
calculator("suma", 10, 67);
calculator("resta", 10, 67);
