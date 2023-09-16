# Formas de agregar código javascript al proyecto:

- Agregando código JavaScript dentro del archivo HTML, usando la etiqueta
  `<script></script>`, normalmente va antes de finalizar la etiqueta
  `<body></body>`(esto es porque primero queremos que cargue el documento HTML
  para luego ejecutar el código javaScript).

  Dentro de esta introduciremos nuestro código javascript, pero si la queremos
  agregar dentro de la etiqeta `<head></head>` debemos introducir la propiedad
  'defer' dentro de la etiqueta `<script></script>` para asi decirle al
  navegador que primero cargue el documento HTML y luego cargue el codigo
  JavaScript,
  <script defer></script>.

### _ejemplo_

```html
<script>
  document.write('Hola mundo desde la etiqueta script');
</script>
```

## Podemos agregar etiquetas HTML:

```html
<script>
  document.write('<h2>Hola mundo desde la etiqueta Script</h2>');
</script>
```

## Podemos agregar alertas en pantalla:

```html
<script>
  document.write('<h2>Hola mundo desde la etiqueta Script</h2>');
  alert('Soy una alerta desde la etiqueta Script');
</script>
```

---

- ## Mediante un archivo JavaScript:

Este tendra la extencion .js, sera un archivo externo, tenemos que relacionarlo
dentro de nuestro documento HTML dentro de la etiqueta

```html
<head>
  <script defer src="app.js"></script>
</head>
```
