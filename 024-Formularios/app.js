const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const expressionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

  const userData = {
    correo: formulario.correo.value,
  };
  4;

  // Validamos el correo
  if (!expressionRegular.test(userData.correo)) {
    console.log(`Correo Invalido: ${userData.correo}`);

    return;
  } else {
    console.log(`Correo valido: ${userData.correo}`);
    console.log('Enviando datos...');
  }
});
