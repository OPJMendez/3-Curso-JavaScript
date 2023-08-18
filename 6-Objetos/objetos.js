//      Objetos
/*
Con los arrays no podemos saber que es cada elemento...
Con los objetos organizamos la información con el metodo propiedad y valor.
Son variables que estan dentro de un objeto.
podemos utilizar cualquier tipo de dato en los objetos incluso otros objetos,funciones etc.
*/
const userList = {
  name: "Carlos",
  age: 35,
  email: "carlos@gmail.com",
  subcriptions: {
    web: true,
    email: true,
  },
  favoriteColors: ["red", "black", "pink"],
  userGreeting: function () {
    console.log("GOOD NIGHT MOTHEFUKAS");
  },
  hobbies: {
    football: true,
    basketball: false,
    videoGames: true,
  },
};
// donde 'name' es la propiedad y 'Carlos' el valor.

// Para acceder a un elemento de la propiedad
//console.log(userList.age);

// Agregar una propiedad al objeto
// userList.country = "Holanda";
// Sobre-escribiendo
// userList.country = "Francia";
// console.log(userList);

// Las funciones dentro de un objeto se les conoce como 'Metodos'
// Acceder al metodo
//console.log(userList.userGreeting());
