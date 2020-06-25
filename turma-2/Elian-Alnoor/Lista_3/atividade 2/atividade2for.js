let rs = require("readline-sync")

let  n1 = rs.questionInt(" digite o primeiro número ");   
let  n2 = rs.questionInt(" digite o segundo número "); 

let soma = 0;

for(num = 0; num < n1; num ++ )       // vamos efetuar a soma n1 vezes
{
  soma = soma + n2; // e, em cada vez, adicionamos n2 ao total
}

console.log("o resultado é igual: " + soma);