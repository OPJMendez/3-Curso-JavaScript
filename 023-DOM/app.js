const container = document.getElementById('contenedor1');

container.addEventListener('click', (event) => {
  console.log('Click en el contenedor');
});

const firstBox = document.querySelector('.caja');
firstBox.addEventListener('click', (event) => {
  console.log('click en la primera caja');
});
