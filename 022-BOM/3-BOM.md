# BOM

## Cookies

Las cookies son pequeños archivos de texto que guardan información en la
computador del usuario, con esto evitamos perder la información cada vez que se
actualice la pagina.

Por ejemplo:

Guardar datos del usuario que no queremos guardar en un base de datos, estos
datos pueden ser:

- Configuraciones, preferencias etc

_sintaxis_

```js
const makeCookie = () => {
  document.cookie = 'name = James';
};
```

---

```
Las cookies tienen un tiempo de expiracíon.

- Cookie de tipo sesión: se borrara cuando cierre el navegador.
```

**Podemos establecer una fecha de expiración**

```js
const makeCookie = () => {
  const expirationDate = new Date('2023-11-03T10:22:00Z').toUTCString();
  document.cookie = `name=James; expires=${expirationDate}`;
};
```

---

**Ejemplo de Cookies**

```js
const login = () => {
  const userName = prompt('Usuario: ');
  document.cookie = `name=${userName}`;
  const userPassword = prompt('Password: ');
  document.cookie = `password=${userPassword}`;
  alert('Sesión iniciada');

  console.log(document.cookie);
};
```

---

- **Forma para obtener el usuario de las cookies**

```js
let user;
const cookies = document.cookie.split(';');
cookies.forEach((cookie) => {
  console.log(cookie.split(';'[0]));
});
```

_reto_

```js
const login = () => {
  const userName = prompt('Usuario: ');
  document.cookie = `name=${userName}`;
  const userPassword = prompt('Password: ');
  document.cookie = `password${userPassword}`;
  alert('Sesión iniciada');
};

/* Forma para obtener el usuario de las cookies */
let user;
let password;
const cookies = document.cookie.split(';');

cookies.forEach((cookie) => {
  const propiedad = cookie.split('=')[0];
  if (propiedad === 'name') {
    user = cookie.split('=')[1];
  }
});
console.log(user);
console.log(password);
```
