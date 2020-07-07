let readline = require("readline-sync");

let numero1 = readline.questionInt("Qual o 1º numero ? ");

let numero2 = readline.questionInt("Qual o 2º numero ? ");

let resultado = 0;

while(numero2 > 0){
   resultado = resultado + numero1;
   numero2--;
}
console.log("O resultado é ", resultado);