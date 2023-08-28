// Función que retorna una promise.
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

// Declaramos que la función se asincrona con async:
const showPosts = async () => {
  // Atrapamos errores con try and catch:
  try {
    //Declaramos el await
    const posts = await fetchPosts();
    // Se ejecutaran las lineas de código despues de finalizar la promise
    // código
    // código
    // código
    // código
    // código
    console.log(posts);
    /* Ya no se necesitaran los metodos then y catch, si la promise es correcta podemos guardar los resultados dentro una variable, esto gracias al await */
  } catch (error) {
    console.log(error);
  }
};
showPosts();
