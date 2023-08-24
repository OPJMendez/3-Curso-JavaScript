/* Bucle For Each
Es un metodo de los arreglos que podemos usar para recorrer los elementos.
*/
const friendsList = ["Alicia", "Maria", "Lucas"];
friendsList.forEach((friends) => {
  console.log(friends);
});

/* Bucle for in
Nos permite recorrer los elementos de un objeto.
*/
const userData = {
  name: "Juan",
  age: 31,
  email: "juan@gmail.com",
};

for (property in userData) {
  console.log(userData[property]);
}
// Manipulando los datos:
// for (property in userData) {
//   userData[property] = "";
// }

/* Bucle for of
Nos permite recorrer los valores de un objeto íterable.
Podemos recorrer: arreglos, cadenas de texto, mapas y listas de nodos.
*/
const labels = document.head.children;
for (elements of labels) {
  console.log(elements);
}

// trick para transforma una coleccion a un arreglo
[...labels].forEach((elements) => console.log(elements));
