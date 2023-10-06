## Agregando elementos

- **Primer paso: Creamos el elemento**

createElement - Recibe como parametro una cadena de texto con la etiqueta que
queremos crear.

```js
const addBox = () => {
  const newSection = document.createElement('section');

  // Agregamos contenido y atributos

  newSection.innerText = 'Nueva Caja';
  newSection.setAttribute('id', 'nuevo-id');
  newSection.setAttribute('class', 'caja activa');

  // Agregamos el elemento al DOM

  const mainContainer = document.getElementById('contenedor1');

  // Diferentes formas de agregar el elemento:

  // .appendChild() - Agrega un elemento al final

  mainContainer.appendChild(newSection);
};
```
