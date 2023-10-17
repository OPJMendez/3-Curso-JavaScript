# Manejo de formularios

Tenemos dos formas de acceder a los formularios:

## Mediante el objeto forms

```js
documento.forms;

// Devolvera una HTMLCollection
```

**Accedemos al elemento forms mediante su ID:**

```js
console.log(document.forms['formulario-donacion']);
```

**Accedemos a un elemento del forms**

```js
console.log(document.forms['formulario-donacion']['correo']);
```

**Accedemos al valor**

```js
console.log(document.forms['formulario-donacion']['correo'].value);
```

## Mediante métodos del DOM

```js
const correo = document.querySelector('#formulario-donacion');
console.log(correo);

// Accedemos al elemento
const correo = document.querySelector('#formulario-donacion #correo');
console.log(correo);

// Otra forma
const correo = document.querySelector('#formulario-donacion [name="correo"]');
console.log(correo);
```

---

---

---

**preventDefault()** evita que la pagina se refresque cuando trabajamos con
formularios.

```js
document.getElementById('btnEnviar').addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Click');
});
```

---

---

Accedemos a los valores del input

```js
document.getElementById('btnEnviar').addEventListener('click', (event) => {
  event.preventDefault();

  const correo = document.querySelector('#formulario-donacion [name="correo"]');
  console.log(correo.value);
});
```

Accedemos a los valores del select box

```js
console.log(document.forms['formulario-donacion']['pais']);

// Su valor
console.log(document.forms['formulario-donacion']['pais'].value);
```

Accedemos a los valores del radio buttom

```js
document.getElementById('btnEnviar').addEventListener('click', (event) => {
  event.preventDefault();

  const forms = document.forms['formulario-donacion'];

  console.log(forms['donacion'].value);
});
```

Accedemos a la fecha

```js
document.getElementById('btnEnviar').addEventListener('click', (event) => {
  event.preventDefault();

  console.log(forms.fecha.value);
});
```

Accedemos a los terminos y condiciones

```js
document.getElementById('btnEnviar').addEventListener('click', (event) => {
  event.preventDefault();

  console.log(forms['terminos-y-condiciones'].checked);
});
```
