# Expresiones Regulares

Podemos usar expresiones regulares para validar los campos de una forma más
precisa.

```js
// Obtenemos el formulario
const formulario = document.getElementById('formulario-donacion');

// Agregamos un evento
formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  // Expresión regular
  const expressionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

  const userData = {
    correo: formulario.correo.value,
  };

  // Validamos el correo
  if (!expressionRegular.test(userData.correo)) {
    console.log(`Correo Invalido: ${userData.correo}`);

    return;
  } else {
    console.log(`Correo valido: ${userData.correo}`);
    console.log('Enviando datos...');
  }
});
```
