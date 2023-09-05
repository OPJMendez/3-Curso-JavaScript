'use strict';

/*
Cuando solamente queremos exportar una función:
 */
const getUser = () => {
  return {
    name: "Juana",
    email: "juan@gmail.com",
  };
};

/* Cuando se vaya a import no necesitaremos llaves y podremos llamarla como queramos */
console.log(getUser());
