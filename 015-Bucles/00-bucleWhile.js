/* Ciclo 'while'
Es similar al ciclo for, pero con la diferencia de que solo tenemos un condicional.
Mientras se cumpla el condicional se ejecutara el ciclo.
*/
let sw = 0;
while (sw <= 4) {
  console.log(`While ${sw}`);
  sw++;
}

/* Ciclo 'do while' 
similar al ciclo 'while', con la diferencia de que ejecutara el bloque al menos una vez.
*/
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 4);
