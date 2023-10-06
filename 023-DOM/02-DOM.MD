## Agregando elementos

- **Primer paso: Creamos el elemento**

createElement - Recibe como parametro una cadena de texto con la etiqueta que
queremos crear.

```javascript
const addBox = () => {
  const newSection = document.createElement('section');

  // Agregamos contenido y atributos

  newSection.innerText = 'Nueva Caja';
  newSection.setAttribute('id', 'nuevo-id');
  newSection.setAttribute('class', 'caja activa');

  // Accedemos a un elemento del elemento DOM

  const mainContainer = document.getElementById('contenedor1');
};
```

## Agregar elementos - .appendChild()

Agrega un elemento al final

```js
mainContainer.appendChild(newSection);
```

---

## Agregar elementos - insertAdjacentElement()

Nos permite agregar un elemento.

Valores que recibe:

- afterbegin - como primer elemento (como primer elemento del padre)

- beforebegin - antes del elemento padre (antes del elemento padre)

- beforeend - como ultimo elemento (como ultimo elemento del elemento padre)

- afterend - despues del elemento padre (despues del elemento padre)

```js
mainContainer.insertAdjacentElement('afterbegin', newSection);
```

---

## Reemplazar elementos - .replaceWith()

Nos permite remplazar el elemento por otro

```js
document.querySelector('#contenedor1 .caja').replaceWith(newSection);
```

---

## Eliminar elementos - .removeChild()

```js
const deleteBox = () => {
  const container = document.getElementById('contenedor1');
  const boxToDelete = container.querySelector('.caja');
  if (boxToDelete) {
    container.removeChild(boxToDelete);
  } else {
    console.log('there are no more boxes to eliminate');
  }
};
```
