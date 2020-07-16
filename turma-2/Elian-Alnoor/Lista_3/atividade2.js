let rs = require("readline-sync")

let  n1 = rs.questionInt(" digite o primeiro número ");   
let  n2 = rs.questionInt(" digite o segundo número "); 

let soma = 0;
let num = 0; 

while( num < n1 )       // vamos efetuar a soma n1 vezes
{
  soma = soma + n2; // e, em cada vez, adicionamos n2 ao total
  num++;
}

console.log("o resultado é igual: " + soma);

//3 x 4 = 3 + 3 + 3 + 3 = 4 + 4 + 4