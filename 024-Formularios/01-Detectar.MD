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
formulario.pais.addEventListener('change', (event) => {
  console.log('el pais cambio');
  console.log(`el nuevo valor es: ${event.target.value}`);
});
```

---

Cuando trabajamos con radio buttoms debemos aplicar el **addEventListener()** en
todos los elementos.

```js
formulario['cantidad-5'].addEventListener('change', (event) => {
  console.log('El valor cambio');
  console.log(`EL nuevo valor es: ${event.target.value}`);
});
formulario['cantidad-10'].addEventListener('change', (event) => {
  console.log('El valor cambio');
  console.log(`EL nuevo valor es: ${event.target.value}`);
});
```

---

- **Evento Focus**

Nos permite detectar cuando un input recibe el foco de atención.

```js
formulario.correo.addEventListener('focus', () => {
  console.log('El input correo ahora es el foco de atención');
});
```

- **Evento Blur**

Nos permite detectar cuando el input pierde el foco de atención.

```js
formulario.correo.addEventListener('blur', () => {
  console.log('El input correo ya no es el foco de atención');
});
```

---

- **Evento keydown**

Nos permite detectar cuando una tecla es presionada sobre un input.

```js
formulario.correo.addEventListener('keydown', (event) => {
  console.log(`La tecla: ${event.key} fue presionada`);
});
```

- **Evento keyup**

Se ejecuta cuando una tecla es levantada al escribir sobre un input.

```js
formulario.correo.addEventListener('keyup', (event) => {
  console.log(`La tecla: ${event.key} dejo de ser presionada`);
});
```
