const addBox = () => {
  /* Primer paso: Creamos el elemento
        
        createElement - Recibe como parametro una cadena de texto con la etiqueta que queremos crear.
        */

  const newSection = document.createElement('section');

  /* Segundo paso: Agregamos contenido y atributos */

  newSection.innerText = 'Nueva Caja';
  newSection.setAttribute('id', 'nuevo-id');
  newSection.setAttribute('class', 'caja activa');

  /* Agregamos el elemento al DOM */
  const mainContainer = document.getElementById('contenedor1');

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
