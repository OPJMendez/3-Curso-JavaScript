/* Operador de tipo Spread
Nos permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/
//Arreglo
const fruitsList = ["Piña", "Manzana", "Mango"];
const favoriteFood = ["Pizza", "Pescado", "Pechuga", ...fruitsList];
console.log(favoriteFood);

// Objeto
const userLogin = {
  email: "juanito@example.com",
  password: "76543321",
};
const userData = {
  userName: "Juanito",
  age: 21,
  ...userLogin,
};
console.log(userData);

/* Parametros Rest:

Permite que una función contenga un número indefinido de argumentos.
Los argumentos extra que encuentre los convertira en un arreglo.

*/
const serverData = (name, user, host, root, ...users) => {
  console.log(name, user, host, root, users);
};
serverData("Genesis", "admin", "3306", "localhost", "JJMendez", 21, "Holanda");

/* Destructuración de objetos:
Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/
const userFriends = ["John", "Juan", "Pepe", "Carla", "Maria", "Luis"];
const [firsName, thirdName] = userFriends;
console.log(firsName);

// En Objetos:
const { userName, age } = userData;
console.log(userName, age);

/* Destructurar los valores que le pasamos a una función */
const newUser = {
  name: "Lucas",
  age: 18,
};
const showAge = (name, age) => {
  console.log(`Name: ${name}, age: ${age}`);
};
console.log(newUser);

// 5:37:36
