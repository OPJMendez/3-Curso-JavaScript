# Objetos

**Con los arrays no podemos saber que es cada elemento... Con los objetos
organizamos la información con el metodo propiedad y valor. Son variables que
estan dentro de un objeto. podemos utilizar cualquier tipo de dato en los
objetos incluso otros** **objetos**,**funciones** _etc_.

**Sintaxis**

```javascript
const userList = {
  name: 'Carlos',
  age: 35,
  email: 'carlos@gmail.com',
  subcriptions: {
    web: true,
    email: true,
  },
  favoriteColors: ['red', 'black', 'pink'],
  userGreeting: function () {
    console.log('GOOD NIGHT MOTHEFUKAS');
  },
  hobbies: {
    football: true,
    basketball: false,
    videoGames: true,
  },
};
```

## Donde **name** es la propiedad (llaves) y **Carlos** el valor.

---

## Para acceder a un elemento de la propiedad

```javascript
console.log(userList.age);
```

---

## Agregar una propiedad al objeto

```javascript
userList.country = 'Holanda';

// Vemos los cambios
console.log(userList);

// Si queremos sobreescribirla
userList.country = 'Francia';
```

## Las funciones dentro de un objeto se les conoce como _Metodos_

### Acceder al metodo

```javascript
console.log(userList.userGreeting());
```
