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

  // Agregamos el elemento al DOM

  const mainContainer = document.getElementById('contenedor1');

  // Diferentes formas de agregar el elemento:

  // .appendChild() - Agrega un elemento al final

  mainContainer.appendChild(newSection);

  /* .insertAdjacentElement()
  
  Nos permite agregar un elemento.

  Valores que recibe:

  afterbegin - como primer elemento (como primer elemento del padre)

  beforebegin - antes del elemento padre (antes del elemento padre)

  beforeend - como ultimo elemento (como ultimo elemento del elemento padre)

  afterend - despues del elemento padre (despues del elemento padre)
  */

  mainContainer.insertAdjacentElement('afterbegin', newSection);
};
```
