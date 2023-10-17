# Validaciones

- **Evento Submit**

Nos permite detectar cuando el usuario intenta enviar un formulario

Accedemos al elemento formulario

```js
const formulario = document.forms['formulario-donacion'];
```

```js
formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Enviando datos');
});
```

- **Evento Change**

Nos permite detectar cuando hay un cambio en el valor de un input, select o
textarea.

Se ejecuta cuando cambiamos el valor del input y damos **click** fuera

```js
formulario.pais.addEventListener('change', () => {
  console.log('el pais cambio');
});
```
