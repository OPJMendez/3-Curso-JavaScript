/* 
        Métodos Estaticos
Nos permiten acceder a propiedades y métodos sin tener que inicializarlos.
*/
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  static deleteUser(userId) {
    console.log(`User ${userId} deleted`);
  }
  static registeredUsers = 7767;
}
// Sin usar métodos estaticos:
// const userObject = new User("John", "John@gmail.com");
// userObject.deleteUser;

User.deleteUser(1);
console.log(User.registeredUsers);
