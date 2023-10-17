const formulario = document.forms['formulario-donacion'];

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Enviando datos');
});

formulario.pais.addEventListener('change', () => {
  console.log('el pais cambio');
});
