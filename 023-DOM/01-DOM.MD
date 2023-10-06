## Modificando elementos

- **elemento.innerHTML**

Nos permite cambiar el contenido HTML de un elemento.

```js
const firstBox = document.querySelector('.caja');

console.log(firstBox.innerHTML);

// Nos devuelve el contenido de ese elemento HTML.
```

_modificandolo_

```js
firstBox.innerHTML = 'Hola';
```

_podemos agregar código HTML_

```js
firstBox.innerHTML = '<b>Hola</b>';
```

---

- **elemento.attribute()**

Nos permite acceder y cambiar atributos del elemento (class, id, etc).

```js
firstBox.id = 'newBox';

// Si no tenia un atributo lo creara, si ya tenia uno lo sobreescribira.

.values
// Nos sirve para manipular formularios

.src
// para manipular rutas de archibos multimedia
```

---

- **elemento.setAttribute()**

Nos permite agregar o establecer el valor de un atributo del elemento.

```js
firstBox.setAttribute('class', 'caja activa');
```

_Atributos personalizados_

```js
firstBox.setAttribute('data-id', 'newId');
```

---

- **elemento.style.property**

Nos permite cambiar los estilos **CSS** de un elemento

```js
containerTwoBoxOne.style.background = '#000';
containerTwoBoxOne.style.color = '#fff';
containerTwoBoxOne.style.textTransform = 'uppercase';
```
