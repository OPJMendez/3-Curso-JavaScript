# Arreglos

```js
const listObjects = [
  'Carro',
  13,
  true,
  {
    name: 'Juan',
    lastName: 'Perez',
  },
  [1, 3, 5, 7, 9, 11],
];
// Obtener un dato especifico por su indice.
console.log(listObjects[0]);
// Agregar elementos a un arreglo
const listColors = [];
listColors[0] = 'red';
listColors[1] = 'blue';
// podemos saltarnos posiciones en el arreglo
listColors[3] = 'yellow';
// podemos agregar elementos con el metodo push
listColors.push('pink');
//console.log(listColors.length);
console.log('el arreglo colores tiene: ' + listColors.length + ' elementos');
```
