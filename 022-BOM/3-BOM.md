# BOM

## Cookies

```
Las cookies son pequeños archivos de texto que guardan información en la computador del usuario, con esto evitamos perder la información cada vez que se actualice la pagina.

Por ejemplo:

Guardar datos del usuario que no queremos guardar en un base de datos, estos datos pueden ser:

- Configuraciones, preferencias etc

```

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
