# JSON - Javascript Object Notation

Es un objeto o estructura de datos donde podemos guardar información pero con
una estructura diferente.

## JSON - Tipos de datos

- Strings
- integers
- objetos (en formato **JSON**)
- arrays
- booleans
- null

---

**No admite**

- funciones
- objetos de fecha
- undefined

## Estructura

```json
{
  "id": 1,
  "name": "James",
  "activeMember": true,
  "post": [
    {
      "id": 1,
      "title": "first post title",
      "text": "first post text"
    },
    {
      "id": 2,
      "title": "second post title",
      "text": "second post text"
    }
  ]
}
```

### En JavaScript

- **parse()** Le pasamos una cadena de texto con formato **JSON** y nos devuelve
  un objeto de JavaScript

```js
console.log(dataUser);
```

- **JSON.parse()**

```js
const jsonObject = JSON.parse(dataUser);
console.log(jsonObject);

console.log(jsonObject.name);
```

---

- Transformar un **object** a **JSON**

## stringify()

Nos permite pasarle un **objeto** de javascript y nos devuelve una cadena de
texto con **objeto** en formato **JSON**

```js
const adminData = {
  name: 'Robert',
  email: 'AdminRobert@gmail.com',
  favoriteColors: ['blue', 'red', 'black'],
};

JSON.stringify(adminData);

console.log(JSON.stringify(adminData));
```
