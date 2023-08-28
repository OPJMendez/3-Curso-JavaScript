// Ejemplo: Funcíon que retorne una promesa.

// fetch se puede interpretar como "peticion" ó "obtener"
const fetchPosts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = ["post 1", "post 2", "post 3", "post 4", "post 5"];
      const error = true;
      if (error) {
        reject("Error getting posts");
      } else {
        resolve(posts);
      }
    }, 2000);
  });
};

/* Queremos retornar la promesa para indicarle al navegador que este atento para enviarle los resultados en caso de que la operación sea exitosa, en caso contrario, queremos que el navegador ejecute otro código. */

fetchPosts()
  .then((posts) => {
    console.log(posts);
  })
  .catch((reject) => {
    console.log(reject);
  });
// Podemos concatenar el "then" y el "catch"

// sin concatenar:
/* fetchPosts().catch((reject) => {
  console.log(reject);
}); */
