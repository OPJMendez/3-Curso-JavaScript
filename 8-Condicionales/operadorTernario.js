/*
Se utiliza cuando queremos guardar un valor dentro de una variable dependiendo de si una condicion se cumple o no.

Podemos hacer condiciones de menos lineas de codigo
*/

const boleto = "vip";

// UTILIZANDO IF
//let codigoAcceso;
// if (boleto === "vip") {
//   codigoAcceso = "VIP-123-456";
// } else {
//   codigoAcceso = "REGULAR-123-456";
// }
// console.log(codigoAcceso);

// UTILIZANDO OPERADOR TERNARIO

const codigoAcceso = boleto === "vip" ? "VIP-123-456" : "REGULAR-123-456";
console.log(codigoAcceso);

/*

Si boleto es igual a 'vip' entonces codigoAcceso sera igual a "VIP-123-456", en caso contrario codigoAcceso sera igual a "REGULAR-123-456

*/

/*
Tambien lo podemos utilizar como si fuera un 'if' y ejecutar diferentes codigos javascript.
*/

boleto === "vip"
  ? console.log("Boleto de tipo vip")
  : console.log("Boleto de tipo regular");
/*
si 'boleto' es igual a 'vip' ? (entonces) ejecuta este console.log, si no, ejecuta este console.log.
*/
