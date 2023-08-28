/* 
        Promesas        
Son estructuras que podemos definir para ordenarle al navegador que queremos que espere a que terminemos de realizar una operación.

"le prometemos al navegador que le devolveremos información."
*/

//Sintaxis:
const myPromise = new Promise((resolve, reject) => {
  //Acción que se ejecutara luego del tiempo establecido en el setTimeout.
  setTimeout(() => {
    const sucessful = false;
    if (sucessful) {
      resolve("Successful connection");
    } else {
      reject("Failed to connect to server");
    }
  }, 4000);
});

// Despues del tiempo establecido en el setTimeout, se ejecutara:
myPromise.then((serverMessage) => {
  alert(serverMessage);
});

// Si el resultado de la promesa no es el esperado, debemos atraparlo:
myPromise.catch((serverMessage) => {
  alert(serverMessage);
});
