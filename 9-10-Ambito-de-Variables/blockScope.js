/*
Block Scope / Alcance de tipo bloque:
-> Pertenecen  a las variables declaradas con const o let dentro de un bloque {..} .
-> solo podemos acceder a ellas dentro del bloque
*/
const age = 19;
if (age >= 19) {
  const accessGranted = true;
  console.log(accessGranted);
}
const accessGranted = "yes";
console.log(accessGranted);
//console.log(accessGranted); Su valor sera 'false' ya que se encuentra por fuera del bloque de código y ademas lanzara un error.
