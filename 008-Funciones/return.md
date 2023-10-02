# Return

**Devuelve informacion hacia afuera de la función.**

---

## Ejemplo practico

```
La siguiente función esta realizando dos funciones al tiempo, esto es una mala practica, debemos procurar que en este caso nuestra función tenga una sola responsabilidad (single responsability).
```

#### función

```javascript
const userOperation = (tipo, number1, number2) => {
  if (tipo === 'suma') {
    console.log(number1 + number2);
  } else if (tipo === 'resta') {
    console.log(number1 - number2);
  }
};
```

### Podemos usar el return

```javascript
const userOperation = (tipo, number1, number2) => {
  let result;
  if (tipo === 'suma') {
    result = number1 + number2;
  } else if (tipo === 'resta') {
    result = number1 - number2;
  } else {
    result = 'ERROR';
  }
  return result;
};
const userResult = userOperation('resta', 50, 250);
console.log(userResult);
```

### Con menos código

```javascript
const userOperation = (tipo, number1, number2) => {
  if (tipo === 'SUMA') {
    return number1 + number2;
  } else if (tipo === 'RESTA') {
    return number1 - number2;
  } else {
    return 'ERROR';
  }
};
const userResult = userOperation('SUMA', 50, 250);
console.log(userResult);
```
