const htmlBtnOne = document.getElementById('btnOne');
const firtsBox = document.querySelector('.caja');
htmlBtnOne.addEventListener('click', (event) => {
  console.log(event);
  firtsBox.classList.toggle('activa');
});
