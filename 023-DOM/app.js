const htmlBtnOne = document.getElementById('btnOne');
const firtsBox = document.querySelector('.caja');
htmlBtnOne.addEventListener('click', (event) => {
  console.log(event);
  firtsBox.classList.toggle('activa');
});

const allBoxes = document.querySelectorAll('.caja');

allBoxes.forEach((box) => {
  box.addEventListener('click', (event) => {
    console.log(`El usuario hizo click en la caja: ${event.target.innerHTML}`);
  });
});
