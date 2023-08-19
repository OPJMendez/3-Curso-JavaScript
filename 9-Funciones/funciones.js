/*
Son bloques de codigo que ejecutan una tarea, las podemos llamar o instanciar.
*/

// FORMA #1
const userTicket = "REGULAR";
// OPERADOR TERNARIO
const userAccess = userTicket === "VIP" ? showMessagge() : showError();
// Sintaxis
function showMessagge() {
  console.log("Is alright");
}
function showError() {
  console.log("ERROR");
}

// FORMA #2 - ASIGNANDO UNA FUNCIÓN A UNA VARIABLE.
const userGreting = function () {
  console.log("GOOD MORNING MOTHAFUKKAS");
};
console.log(userGreting());

// FORMA #3 - FUNCIÓN DE TIPO FLECHA.
/*
Una de las ventajas de este tipo de funciónes es ahorrar codigo.
*/
const userGretingTwo = () => console.log("FUNCIÓN DE TIPO FLECHA");
