/*
Nos permite ejecutar cierto codigo dependiendo de ciertas condiciones.
*/

//Ejemplo #1
let accecs = false;
const user = {
  id: 938,
  age: 21,
  country: "Francia",
  ticket: true,
};
// if (user.age > 18) {
//   accecs = true;
//   console.log(`El usuario: ${user.id} tiene ingreso`);
// } else {
//   console.log(`El usuario: ${user.id} no tiene ingreso`);
// }

// Ejemplo #2
// if (user.age >= 18 && user.ticket) {
//   console.log(`Es mayor de edad y tiene un ticket`);
// } else {
//   console.log("Es menor de edad y no tiene un ticket");
// }

// Ejemplo #3
// if (user.age >= 18) {
//   if (user.ticket) {
//     console.log("Es mayor de edad y tiene ticket");
//   } else {
//     console.log("Es mayor de edad, pero no tiene ticket");
//   }
// } else {
//   console.log("Recuerde que debe ser mayor de edad");
// }

// Ejemplo #4 else if
// if (user.country === "Holanda") {
//   console.log("Nacionalidad Holandesa");
// } else if (user.country === "Colombia") {
//   console.log("Nacionalidad Colombiana");
// } else if (user.country === "España") {
//   console.log("Nacionalidad Española");
// } else {
//   console.log("Nacionalidad desconocida");
// }
