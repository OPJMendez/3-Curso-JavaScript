## Modificando estilos CSS mediante clases

- **.classList**

Muestra las clases del elemento.

```js
const firstBox = document.querySelector('#contenedor1 .caja');

console.log(firstBox.classList);
```

---

- **classList.add()**

Nos permite agregar clases a un elemento.

```js
const createClass = () => {
  firstBox.classList.add('activa');
};
```

---

- **classList.remove()**

Nos permite eliminar clases de un elemento.

```js
const deleteClass = () => {
  firstBox.classList.remove('activa');
};
```

---

- **classList.toggle()**

Nos permite alternar clases de un elemento.

Si no hay un clase, la creara. Si ya hay una clase, la eliminara.

```js
const toggleClass = () => {
  firstBox.classList.toggle('activa');
};
```

---

- **classList.contains()**

Nos permite comprobar si el elemento contiene un clase.

```js
const checkClass = () => {
  if (firstBox.classList.contains('activa')) {
    console.log('La caja tiene la clase activa');
  } else {
    console.log('La caja no tiene la clase activa');
  }

  console.log('Contiene las siguientes clases:');
  firstBox.classList.forEach((classElements) => {
    console.log(classElements);
  });
};
```
