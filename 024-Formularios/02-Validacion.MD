# Validaciones

- Validar cuando el usuario presione el boton enviar

Accedemos al formulario:

```js
const formulario = document.getElementById('formulario-donacion');
```

Obtenemos los elementos:

```js
formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const userData = {
    correo: formulario.correo.value,
    pais: formulario.pais.value,
    donacion: formulario.donacion.value,
    fecha: formulario.fecha.value,
    TyC: formulario['terminos-y-condiciones'].checked,
  };

  // Validamos el correo
  if (userData.correo.length <= 2) {
    console.log(`Correo Invalido: ${userData.correo}`);

    return;
  }
  // validamos el pais
  if (userData.pais === '') {
    console.log('Pais Invalido');

    return;
  }

  // validamos la donación
  if (userData.donacion === '') {
    console.log('Seleccione una cantidad');

    return;
  }

  /* Validamos la fecha */
  if (userData.fecha === '') {
    console.log('Selecciona una fecha correcta');

    return;
  }

  /* Validamos TyC */
  if (!userData.TyC) {
    console.log('Debe aceptar los terminos y condiciones');

    return;
  }
  console.log(userData);
  console.log('Enviando datos...');
});
```
