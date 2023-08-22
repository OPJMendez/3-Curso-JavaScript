/*
-> Son las variables declaraa fuera de función.
-> Podemos acceder a ellas desde cualquier parte del código.
-> Podemos usar const, let y var.
scopeGlobal, alcance de las variables o ambito de las variables, quiere decir desde que parte del codigo podemos acceder o manipualar las variables.
*/

// El alcance es global.
var name = "Jhaminton";
name = "JJ Mendez";
const serverGreating = () => {
  console.log(`Hello ${name}`);
};
serverGreating();
