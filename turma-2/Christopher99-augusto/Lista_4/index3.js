let readline = require("readline-sync");

let numero = readline.questionInt("Qual é o numero ?  ");

let contador = 1

let string = "*";

while(contador <= numero){

    console.log(string.repeat(contador));
    
    contador++;
}