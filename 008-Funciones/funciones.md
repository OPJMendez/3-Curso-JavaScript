# Funciones

**Son bloques de codigo que ejecutan una tarea, las podemos llamar o
instanciar.**

## Forma #1

```javascript
// Variable
const userTicket = 'REGULAR';

// Sintaxis

// función no.1
function showMessagge() {
  console.log('Is alright');
}

// función no.2
function showError() {
  console.log('ERROR');
}

// OPERADOR TERNARIO
const userAccess = userTicket === 'VIP' ? showMessagge() : showError();
```

---

## Forma #2 - ASIGNANDO UNA FUNCIÓN A UNA VARIABLE.

```javascript
const userGreting = function () {
  console.log('GOOD MORNING MOTHAFUKKAS');
};
console.log(userGreting());
```

---

## FORMA #3 - FUNCIÓN DE TIPO FLECHA.

**Una de las ventajas de este tipo de funciónes es ahorrar codigo.**

```js
const userGretingTwo = () => console.log('FUNCIÓN DE TIPO FLECHA');
```
