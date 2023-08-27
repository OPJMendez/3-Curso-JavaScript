/* 
        Callbacks
Son funciones que podemos pasar como parametros a otra funcion.
*/
// Ejemplo
const getUserPost = (name, callback) => {
  console.log("Getting the user's posts");
  setTimeout(() => {
    let posts = ["postOne", "postTwo", "postThree"];
    callback(posts);
  }, 2000);
};
getUserPost("James", (posts) => {
  console.log(posts);
});
