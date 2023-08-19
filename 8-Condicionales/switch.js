/*
Cuando utilizar if y cuando Switch

El if es más flexible ya que permite realizar más condiciones con operadores.

Con Switch solamente verificaremos una condicion.
*/

const user = {
  name: "Carlos",
  country: "Colombia",
};
switch (user.country) {
  case "Holanda":
    console.log("Holandes");
    break;

  case "Canada":
    console.log("Canadiense");
    break;

  default:
    console.log("Nacionalidad desconocida");
}
