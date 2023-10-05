const login = () => {
  const expirationDate = new Date('2023-10-07T10:22:00Z').toUTCString();
  const userName = prompt('Usuario: ');
  document.cookie = `name=${userName}; expires=${expirationDate}`;

  alert('Sesión iniciada');
};

/* Forma para obtener el usuario de las cookies */
let user;

const cookies = document.cookie.split(';');

cookies.forEach((cookie) => {
  const propiedad = cookie.split('=')[0];
  if (propiedad === 'name') {
    user = cookie.split('=')[1];
  }
});
if (user) {
  console.log(`Hola, ${user}`);
} else {
  console.log('Debes iniciar sesión');
}
/* Borrar cookies */
const closeSesion = () => {
  const expirationDate = new Date('2022-10-03T10:22:00Z').toUTCString();
  document.cookie = `name=; expires=${expirationDate}`;
  console.log('Hasta luego');
};
