/* Continue
Nos sirve para saltar a la siguiente iteración.
*/
const guestsList = [
  "Carlos",
  "Cristian",
  "Christofer",
  "Jorge",
  "Estefania",
  "Erika",
  "Manuel",
];
console.log("Invitados");
for (let i = 0; i < guestsList.length; i++) {
  if (guestsList[i] === "Jorge") {
    console.log("No bienvenido");
    continue;
  }
  console.log(guestsList[i]);
}
