# Browser Object Model

```
Es un objeto que nos permite acceder a propiedades y métodos que el navegador web nos va dar acceso.
```

---

```js
window;
```

Contiene un gran cantidad de métodos y propiedades que nos permite trabajar con
la ventana.

**Ejemplo**

```javascript
window.alert('hello');
// funcionan igual porque son métodos globales.
alert('hello');
```

---

**Ancho y alto de la ventana**

```javascript
console.log(
  `la ventana tiene de ancho: ${window.innerWidth}, y ${window.innerHeight} de alto`,
);
```

---

**Abrir ventanas**

```
window.open()

Nos permite abrir, cerrar, cambiar tamaño de ventanas del navegador.

Nota: Es posible que el navegador te pida permisos para abrir una nueva ventana.

1er parametro: Dirección (URL) de la nueva ventana.
2do parametro: Nombre de la ventana.
3er parametro: cadena de texto de opciones.
```

_sintaxis_

```javascript
const openWindow = () => {
  window.open('https://github.com/', 'New Window', 'width=750px,height=400px');
};
```

```js
/* Nos devuelve un objeto para acceder a esa ventana.

Podemos manipular la nueva ventana:*/

let newWindow;
const openWindow = () => {
  newWindow = window.open('', 'New Window', 'width=750px,height=400px');
  newWindow.document.write('<h1>Manipulando la nueva ventana</h1>');
};

// Cerramos la ventana
const closeWindow = () => {
  newWindow.window.closeWindow();
};

// Tambien

const closeWindow = () => {
  newWindow.close();
};
```

---

## Propiedades para acceder a la pantalla (Monitor)

_Representa la pantalla del usuario_

- **Screen Object**

```javascript
console.log(`Ancho de pantalla: ${window.screen.width}`);
console.log(`Alto de pantalla: ${window.screen.height}`);
```

---

- **Location**

```js
/* Obtenemos la URL de la barra de direcciones, tambien lo usamos paraa cargar nuevos documentos. */

console.log(window.location); // Obtenemos la URL

console.log(window.location.href); // Obtenemos la barra de direcciones

// Podemos omitir el uso de la palabra window
```

---

**Hostname**

_Retorna el host de la página actual_

```js
console.log(location.hostname);
```

---

- **pathname**

_Retorna la ruta y archivo de la pagina web actual_

```javascript
console.log(location.pathname);
```

---

- **protocol**

_Retorna el protocolo utilizado_

```javascript
console.log(location.protocol);
```

---

- **assign** _nos permite cargar documentos, paginas etc_

```js
const cargarDocumento = () => {
  location.assign('https://chat.openai.com/auth/login');
};
```

---

- **history**

_Nos permite manipular ciertos botones del navegador_

```js
// back nos permite regresar
const backPage = () => {
  history.back();
};

// forward nos permite adelantarnos a una pagina recientemente abierta
const forwardPage = () => {
  history.forward();
};
```
