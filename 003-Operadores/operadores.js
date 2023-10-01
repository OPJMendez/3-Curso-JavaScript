/*
 diferente
/== diferente en valor y en tipo de valor
> mayor que
< menor que
>= mayor o igual que
<= menor o igual que
? operador ternario
*/

console.log(question);

//      Operador ternario ?
/*
Nos permite hacer comparaciones y ejecutar el codigo si se cumple una condición.
*/
const result =
  7 > 8
    ? 'el primer valor es mayor que el segundo valor'
    : 'el segundo valor es mayor que el primer valor';
console.log(result);

//      Operadores Logicos
/*
&& and
|| or 
! not
*/
const name = 'Kiara';
const age = 18;
const ticket = true;
const permise = true;
const giveAccest = (age >= 18 && ticket) || permise;

//      ! invierte valores
const variable = false;
console.log(!variable);
