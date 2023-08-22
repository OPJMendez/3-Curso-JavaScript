const user = {
  name: "John",
  age: 36,
  userFriends: ["Carlos", "Juan", "Camila"],
  userGreeting: () => {
    console.log("GOOD MORNING MOTHAFUKKAS");
  },
};
/* Metodos personalizados o propios */
user.userGreeting();

/* object.keys()
Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
const userKeys = Object.keys(user);
console.log(userKeys);

/* object.values() 
Nos devuelve un arreglo con las valores (values) del objeto.
*/
const userValues = Object.values(user);
console.log(userValues);

/* object.entries()
Nos devuelve un arreglo con las claves y valores del objeto.
*/
const userData = Object.entries(user);
console.log(userData);
