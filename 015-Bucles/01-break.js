/* Break:
Nos sirve para salir de bloques de tipo Switch, pero tambien nos sirve para forzar la salida de un ciclo.
*/
const userSocialMedia = ["Facebook", "Twitter", "Instagram", "Reddit"];

for (let i = 0; i < userSocialMedia.length; i++) {
  if (userSocialMedia[i][0] !== "A") {
    break;
  }
  console.log(userSocialMedia[i][0]);
}
// Si ningun elemento del arreglo comienza por la letra 'A' se detendra el bucle en el break

const namesList = [
  "Carlos",
  "Pepe",
  "Mateo",
  "Camila",
  "Lucas",
  "Lucia",
  "Javier",
  "Pablo",
  "Ana",
  "Marcos",
  "Luciana",
  "Lorenzo",
];
for (let i = 0; i < namesList.length; i++) {
  if (namesList[i][0] == "P") {
    console.log(
      `El nombre: ${namesList[i]} comienza por la letra: ${namesList[i][0]}, ¡el recorrido se ha detenido!`
    );
    break;
  }
  console.log(namesList[i][0]);
}
/* si dentro de los elementos del arreglo, en la posición  en la posición o indice 0 de ese elemento comienza con la letra "P" detiene el bucle.
 */
