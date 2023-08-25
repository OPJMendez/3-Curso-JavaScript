/* 
La herencia de clases nos va permitir poder crear clases tomando las propiedades y métodos de otras clases. 
*/

// Clase de ejemplo
class User {
  constructor(userName, userPassword) {
    this.userName = userName;
    this.userPassword = userPassword;
  }
  getPost() {
    const posts = ["post1", "post2"];
    return posts;
  }
}

// Hacemos uso de la herencia - 'extends'.
class Moderator extends User {
  constructor(userName, userPassword, userPermissions) {
    // Con 'super()' copiamos todos los métodos, propiedades y constructor de la clase padre.
    super(userName, userPassword);
    this.userPermissions = userPermissions;
  }
  // Método del moderador
  deletePosts(id) {
    if (this.userPermissions.includes("deletePosts")) {
      console.log(`post ${id}, was deleted`);
    } else {
      console.log("You are not allowed to delete this post");
    }
  }
}

const userLogin = new User("Juan", "849561js4");
console.log(userLogin.getPost());

const adminLogin = new Moderator("Pablo", "545ss454s", [
  "deletePosts",
  "editPosts",
]);
console.log(adminLogin.getPost());
console.log(adminLogin.userPermissions);
adminLogin.deletePosts(484);
