# Document Object Model

**La página cuando cargar crear el DOM, este contiene la estructura de toda la
página.**

- Tenemos que acceder a los elementos para poder hacerlos inter-activos.

## Ejemplos

**getElementById**

Nos permite obtener un elemento en base a su atributo id

_sintaxis_

_HTML_

```html
<body>
  <div class="contenedor-principal">
    <div class="contenedor" id="contenedor1">
      <div class="caja">Caja 1</div>
      <div class="caja">Caja 2</div>
      <div class="caja">Caja 3</div>
    </div>
    <div class="contenedor" id="contenedor2">
      <div class="caja">Caja 1</div>
      <div class="caja">Caja 2</div>
      <div class="caja">Caja 3</div>
    </div>

    <button id="boton1">Agregar Evento</button>
    <button id="boton2">Eliminar Evento</button>
  </div>
</body>
```

_Javascript_

```js
document.getElementById('contenedor1');

// Es más común guardar referencias de ese elemento dentro una variable:

const htmlContainerOne = document.getElementById('contenedor1');
```

---

**children**

Nos permite obtener los elementos hijos (Esto devolvera una colección de
elementos HTML)

```js
console.log(htmlContainerOne.children);
```

---

**parentElement**

Nos permite obtener el elemento padre de un elemento

```js
console.log(htmlContainerOne.parentElement);
```

---

**getElementByTagName**

Nos permite obtener una colección de elementos en base a la etiqueta.

_Nota: Devuelve una colección HTML. Una colección no es un arreglo_

```js
const htmlElements = document.getElementsByTagName('div');
console.log(htmlElements);
```

---

**getElementByClassName**

Nos permite obtener una colección de elementos en base a su clase CSS.

_Nota: Devuelve una colección HTML._

```js
const htmlElements = document.getElementsByClassName('contenedor');
console.log(htmlElements);
```

---

**querySelector**

Nos devuelve el primer elemento que coincida con un selector estilo CSS.

_Nota: Devuelve un nodeList_

```js
const htmlElements = document.querySelector('#contenedor1');
console.log(htmlElements);
```

Podemos buscar más elementos que se encuentren dentro del _contenedor1_

**solamente devuelve el primer elemento que concuerde**

```js
const htmlElements = document.querySelector('#contenedor1 .caja');
console.log(htmlElements);
```

---

**querySelectorAll**

Nos devuelve una colección de elementos en base a un selector estilo CSS.

_Nota: Devuelve un nodeList_

```js
const htmlElements = document.querySelectorAll('#contenedor1 .caja');
console.log(htmlElements);
```

_el querySelectorAll nos permite recorrer el nodeList_

```js
htmlElements.forEach((boxes) => {
  console.log(boxes);
});
```

---

**closest**

Nos permite buscar de adentro hacia afuera en busca de un elemento (Desde los
elementos hijos hacia los elementos padres).

```js
const lastBox = document.querySelector('#contenedor2 .caja:last-child');
console.log(lastBox);

console.log(lastBox.closest('.contenedor-principal'));
```

---

## Podemos encadenar todos los métodos

```js
const containerTwo = document.getElementById('contenedor2');

console.log(containerTwo.querySelector('.caja'));
```
