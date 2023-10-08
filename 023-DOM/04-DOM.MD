## Modificando estilos mediante JavaScript "inline styles"

```js
const lastBox = document.querySelector('#contenedor2 .caja:last-child');

lastBox.style.background = '#000';
lastBox.style.color = '#fff';
```

**otro ejemplo**

```js
// Aumentar y disminuir el tamaño de fuente de forma dinamica
const allBox = document.querySelectorAll('.caja');
let fontSize = 24;
const incrementFontSize = () => {
  allBox.forEach((box) => {
    box.style.fontSize = `${fontSize + 1}px`;
    fontSize++;
  });
};
const decrementFontSize = () => {
  allBox.forEach((box) => {
    box.style.fontSize = `${fontSize + 1}px`;
    fontSize--;
  });
};
```

---
