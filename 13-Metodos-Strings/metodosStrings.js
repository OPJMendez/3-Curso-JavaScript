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

/* .replace()
Devuelve una cadena de texto en donde remplaza un valor por otro.

1er parametro - El texto que queremos remplazar.

2do parametro - El texto que queremos poner.
*/
const userGreeting = "Good Night Son of Bitches";
console.log(userGreeting.replace("Night", "Evening"));

/* .split()
Convierte una cadena de texto en un arreglo.

1er parametro - El caracter que funcionara como separador.
*/
const userQuote = "follow your dreams, keep sleeping";
console.log(userQuote.split("-"));

/* toUpperCase() - toLowerCase() 
Transforma la cadena a mayusculas - Transforma la cadena a minusculas.
*/
