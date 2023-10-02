# Operadores

**Nos permiten realizar calculos logicos, relacionales y comparativos...**

## Aritmeticos

- **suma**

```javascript
const suma = 54 + 54;
```

- **resta**

```javascript
const resta = 54 - 54;
```

- **multiplicacion**

```javascript
const mult = 54 * 54;
```

- **division**

```javascript
const div = 54 / 54;
```

- **aumento**

```javascript
i++;
let numero = 10;
numero += 15;
```

- **disminución**

```javascript
i--;
let numero = 10;
numero -= 15;
```

## Operador de asignación

- **Operador de asignación**

```javascript
// Se usa para asignar un valor a una variable
let myAge = 21;
let myName = 'JJ';
```

## Operadores de comparación

**Nos permiten comparar valores**

- **Igual que**

```javascript
// ==
let numberOne, numberTwo;
numberOne = 10;
numberTwo = 10;
question = numberOne == numberTwo;
```

- **Igual en valor y en tipo de dato**

```javascript
// ===
let numberOne, numberTwo;
numberOne = 10;
numberTwo = 10;
```

- **Diferente en valor de dato**

```javascript
// !=
let numberOne, numberTwo;
numberOne = 10;
numberTwo = 20;
if (numberOne != numberTwo) {
  console.log('');
}
```

- **Diferente en valor y en tipo de dato**

```javascript
/==
```

- **mayor que**

```javascript
>
```

- **menor que**

```javascript
<
```

- **mayor o igual que**

```javascript
>=
```

- **menor o igual que**

```javascript
<=
```

- **Operador Ternario ?**

Nos permite hacer comparaciones y ejecutar el codigo si se cumple una condición.

```javascript
const result =
  7 > 8
    ? 'el primer valor es mayor que el segundo valor'
    : 'el segundo valor es mayor que el primer valor';
console.log(result);
```

## Operadores Logicos

```javascript
&& and
|| or
! not

const name = 'Kiara';
const age = 18;
const ticket = true;
const permise = true;
const giveAccest = (age >= 18 && ticket) || permise;
```

### ! Invierte valores

```javascript
const variable = false;
console.log(!variable);
```
