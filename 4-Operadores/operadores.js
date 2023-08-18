/*
Nos permiten realizar calculos logicos, relacionales y comparativos...
*/

//      Operadores aritmeticos
/*
= Operador de asignación. Se usa para asignar valor a una variable.
+ suma
- resta
* multiplicacion
/ division
% modulo
++ aumento
-- disminución
*/
const suma = 54 + 54;
const resta = 54 - 21;

//      Operadores de asignación
/* 
+= Suma un número al valor de la variable
-= resta un número al valor de la variable
*= multiplica un número al valor de la variable
/= divide un número al valor de la variable
%= obtiene el sobrante de una division y lo asigna a la variable
*/
let numero = 10;
numero += 15;
console.log(numero);

//      Operadores de comparación
/*
Nos permiten comparar valores

== igual que
=== igual en valor y en tipo de valor
!= diferente
/== diferente en valor y en tipo de valor
> mayor que
< menor que
>= mayor o igual que
<= menor o igual que
? operador ternario
*/
let numberOne, numberTwo;
numberOne = 10;
numberTwo = 10;
question = numberOne == numberTwo;
console.log(question);

//      Operador ternario ?
/*
Nos permite hacer comparaciones y ejecutar el codigo si se cumple una condición.
*/
const result =
  7 > 8
    ? "el primer valor es mayor que el segundo valor"
    : "el segundo valor es mayor que el primer valor";
console.log(result);

//      Operadores Logicos
/*
&& and
|| or 
! not
*/
const name = "Kiara";
const age = 18;
const ticket = true;
const permise = true;
const giveAccest = (age >= 18 && ticket) || permise;

//      ! invierte valores
const variable = false;
console.log(!variable);
