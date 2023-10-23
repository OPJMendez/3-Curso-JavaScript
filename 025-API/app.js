new Date();
const fechaActual = new Date();

// como objeto
console.log(fechaActual.toString());

// como string
console.log(fechaActual.toDateString());

// obtener la hora
console.log(fechaActual.toTimeString());

// obtener el mes, (obtiene el número del mes)
console.log(fechaActual.getMonth());

// obtener el año
console.log(fechaActual.getFullYear());
