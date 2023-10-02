# BOM

- **navigator**

```
Este contiene información acerca del navegador web del usuario, por ejemplo:

- Cookies activadas
- Lenguaje del navegador
```

_sintaxis_

```js
console.log(navigator.cookieEnabled);
// retorna un true o false

console.log(navigator.userAgent);
// retorna información del navegador

console.log(navigator.language);
// retorna el idioma del navegador del usuario

console.log(navigator.onLine);
// detecta si el navegador esta conectado a internet
```

---

## Ventanas de alertas, alert

- **alert**

_podemos omitir el uso de la palabra window_

```javascript
window.alert('Hello user');
// Para informarle al usuario de algo.
```

- **confirm**

```
Ventana de confirmación, sirve para que el usuario pueda aceptar o cancelar.
Retorna true o false dependiendo de la respuesta del usuario
```

_sintaxis_

```js
const login = () => {
  const allowAccess = confirm('You are of age?');

  if (allowAccess) {
    alert('Welcome!');
  } else {
    alert('You cant be here');
  }
};
```

---

- **input**

```
una ventana donde el usuario puede introducir un valor.
retorna una cadena de texto con la respuesta del usuario.
```

_sintaxis_

```js
const greeting = () => {
  const userRequest = prompt('Hello, whats your name?');

  alert(`Welcome, ${userRequest}, we hope your doing fine`);
};
```

---

# Timers

```
Nos sirven para ejecutar código despues de cierto tiempo, o cada x tiempo
```

- **window.setTimeOut()**

```
Nos permite ejecutar una función despues de cierto tiempo.
```

_sintaxis basica_

```js
const greeting = () => {
  alert('Hello');
};
setTimeout(greeting, 3000);
```

_funcion anonima_

```js
setTimeout(function () {
  console.log(`Name: ${userName}`);
  console.log(`Age: ${userAge}`);
  console.log(`Country: ${userCountry}`);
}, 3000);
```

_funcion tipo flecha_

```javascript
setTimeout(() => {
  console.log(`Name: ${userName}`);
  console.log(`Age: ${userAge}`);
  console.log(`Country: ${userCountry}`);
}, 3000);
```

_integrandola con un elemento HTML_

```html
<button onclick="initGreeting()" class="button-back">Boton</button>
```

```js
const greeting = () => {
  alert('Hello');
};
const initGreeting = () => {
  setTimeout(greeting, 7000);
};
```

_deteniendo el timer_

```js
const timer = () => {
  console.log('Este es el mensaje del Timer');
};
let timerId;
const initTimer = () => {
  console.log('Iniciando timer');
  timerId = setTimeout(timer, 5000);
};
const stopTimer = () => {
  console.log('Parando timer');
  clearTimeout(timerId);
};
```
