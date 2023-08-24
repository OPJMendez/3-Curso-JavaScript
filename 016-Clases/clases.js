/* 
Basicamente son plantillas para crear objetos.
Estas no permiten encapsular código.

        Estructura de una clase:

-> Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.

-> Constructor: Es un método especial para inicializar un objeto creado a partir de una clase.

-> Métodos: La clase puede contener funciones. Dentro de una clase se llaman métodos.

*/

// Definir la clase - Sintaxis:
class User {
  //Properties
  type = "admin";

  //Método Constructor
  constructor(name, lastName) {
    //Properties - 'this' hace referencia a la clase.
    this.name = name;
    this.lastName = lastName;
  }
  //método personalizado
  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
}
//Objeto
const newUser = new User("JJ", "Mendez");
console.log(newUser);
console.log(newUser.name);

//uso del método personalizado
const userFullName = console.log(newUser.getFullName());

// Podemos crear nuevos usuarios
