/*
Local Scope o Variables locales:
-> Son las variables declaradas dentro de una función.
-> Solo podemos acceder a ellas desde dentro de la función.
*/
var lettersName = (userName) => {
  var lettersLength = userName.length;

  console.log(`${userName} tiene ${lettersLength} de letras`);

  var nestedFunction = () => {
    console.log(lettersLength);
  };
  nestedFunction();
};
lettersName("Jhaminton");
