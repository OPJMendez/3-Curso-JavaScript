# BOM

**window.setInterval()**

```
Nos permite ejecutar una función cada cierto tiempo, este se repetira infinatamente.
```

_sintaxis_

```js
setInterval(() => {
  console.log('Hello');
}, 2000);
```

_dinamica con html_

```js
let cuenta = 0;
let timerId;
const initTimer = () => {
  timerId = setInterval(() => {
    console.log(`La cuenta va por ${cuenta}`);
    cuenta += 2;
  }, 1000);
};
const stopTimer = () => {
  console.log('Timer Stopped');
  clearInterval(timerId);
};
```
