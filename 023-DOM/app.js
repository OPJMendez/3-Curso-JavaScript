const deleteBox = () => {
  /* Eliminar elementos */
  const container = document.getElementById('contenedor1');
  const boxToDelete = container.querySelector('.caja');
  if (boxToDelete) {
    container.removeChild(boxToDelete);
  } else {
    console.log('theres no more box to delete');
  }
};
