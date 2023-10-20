document.getElementById('boton1').addEventListener('click', () => {
  const userName = prompt('Ingresa tu nombre');
  window.localStorage.setItem('userNameRequest', userName);
});
document.getElementById('boton2').addEventListener('click', () => {
  window.localStorage.removeItem('userName');
});
if (!window.localStorage.userName) {
  console.log(`Hello, ${window.localStorage.userName}`);
} else {
  console.log('LocalStorage is empty');
}
