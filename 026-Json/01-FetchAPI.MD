# Fetch API

Es una **API** del navegador que nos permite realizar _peticiones_ al
**servidor**

---

Existen paginas web que simulan un servidor, por ejemplo:

[**n:point**](https://www.npoint.io/)

Mediante esta podremos realizar peticiones.

---

Basicamente un **endPoint** es la dirección a la cual se le realizara
peticiones.

```js
const endPoint = 'https://api.npoint.io/ed8bd229e80e1229ee8f';

fetch(endPoint);
```

Al momento de hacer la **peticion** ( _Request_ ) se espera una **respuesta** (
_Response_ ), el servidor procesara este petición por lo que tomara un
determinado tiempo, es por eso que **fetch** retornara una **promesa** (
_promise_ ) dado esto podremos trabajar con **then()** y **catch()**.

- Con el método **then()** podemos ejecutar una función cuando recibamos una
  **respuesta**

- Con el método **catch()** podemos ejecutar en caso de _error_ en la
  **respuesta**

```js
fetch(endPoint)
  .then((response) => {
    console.log('El servidor respondio');
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

---

El método **json()** toma el **response** y extrae el formato **.JSON**, este
método retornara una **promise** asi que podremos almacenarla en una _variable_

```js
fetch(endPoint)
  .then((response) => {
    console.log('El servidor respondio');

    const promise = response.json();
    promise
      .then((data) => {
        console.log(data);

        console.log(data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
```

---

# Usando Async() - Await()

```js
const getData = async () => {
  const serverResponse = await fetch(endPoint);
  const responseData = await serverResponse.json();
  console.log(responseData);
};

getData();
```
