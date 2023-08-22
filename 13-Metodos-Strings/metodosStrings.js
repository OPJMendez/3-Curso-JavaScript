/* Las proiedades no llevan el (), solamente los metodos. */
/* (Propiedad) .length
Devuelve el número de caracteres de una cadena de texto.
*/
const text = "Hello, Im JJ";
console.log(text.length);

/* IndexOf() - .lastIndexOf() - Devuelve el index del primer/ultimo */

console.log(text.indexOf("I"));
console.log(text.lastIndexOf("J"));

/* .slice()
Devuelve un fragmento de una cadena de texto.

1er parametro - Index desde donde queremos cortar.

2do parametro (opcional) - Index hasta donde queremos cortar.
*/
console.log(text.slice(4, 12));
