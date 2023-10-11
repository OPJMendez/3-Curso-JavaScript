# Eventos en JavaScript

- **addEventListener()**

```js
const htmlBtnOne = document.getElementById('btnOne');
htmlBtnOne.addEventListener('click', () => {
  console.log('click');
});
```

¿Como saber si el usuario hizo click sobre algun elemento de la pantalla?

Agregando el evento a multiples elementos recorriendolo mediante un ciclo.

**Nota: Esta no es la forma mas optima.**

```js
const allBoxes = document.querySelectorAll('.caja');

allBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    console.log('El usuario hizo click en la caja');
  });
});

const allBoxes = document.querySelectorAll('.caja');

allBoxes.forEach((box) => {
  box.addEventListener('click', (event) => {
    console.log(`El usuario hizo click en la caja: ${event.target.innerHTML}`);
  });
});
```
