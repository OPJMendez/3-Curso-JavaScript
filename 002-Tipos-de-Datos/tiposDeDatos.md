# Tipos de datos

Tipos de datos que podemos guardar en las variables:

- string : Cadena de texto.

```javascript
let cadenaDeTexto = 'Cadenas de texto';
```

- number : Números.

```javascript
let numeros = 100;
let decimales = 14.13;
```

- boolean : Booleano (true o false).

```javascript
let usuarioConectado = false;
```

- Arrays - Arreglos
  - Nos permiten guardar multiples valores de distintos tipos de datos, incluso
    arreglos dentro de arreglos.

```javascript
const nameList = ['Alicia', 'JJ', 'Prince', 21];
```

- object : Nos permiten guardar datos en parejas, (Propiedad y valor)

```javascript
const person = {
  name: 'Carlos',
  age: 33,
  car: {
    brand: 'Ferrari',
    color: 'Negro',
  },
};

//Accedemos a los distintos valores de esta forma:
console.log(person.age);
console.log(person.car);
```

- function : Funciones.

```javascript
function printHello() {
  console.log('Hello');
}
printHello();
```

- null : Valor Nulo.

```javascript
// Normalmente se usa cuando queremos especificar que un valor sea nulo.
let nullValue = null;
```

- undefined : Valor sin definir (es el valor por defecto)
  - Se usa para indicarnos que un valor no esta definido.

```javascript
let undefinedValue = undefined;
```
