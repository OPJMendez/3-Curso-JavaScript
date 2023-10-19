const formulario = document.forms['formulario-donacion'];

formulario.correo.addEventListener('keydown', (event) => {
  console.log(`La tecla: ${event.key} fue presionada`);
});
formulario.correo.addEventListener('keyup', (event) => {
  console.log(`La tecla: ${event.key} dejo de ser presionada`);
});
