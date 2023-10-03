const login = () => {
  const userName = prompt('Usuario: ');
  document.cookie = `name=${userName}`;
  const userPassword = prompt('Password: ');
  document.cookie = `password=${userPassword}`;
  alert('Sesión iniciada');
};

/* Forma para obtener el usuario de las cookies */
let user;
const cookies = document.cookie.split(';');
cookies.forEach((cookie) => {
  console.log(cookie);
});
/* 9:54:34 */
