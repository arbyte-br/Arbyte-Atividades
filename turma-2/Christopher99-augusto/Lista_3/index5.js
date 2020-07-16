let readline = require("readline-sync");

let numero = readline.questionInt("Qual o numero ? ")

let potencia = readline.questionInt("Qual a potencia ? ")

let resultado = 1

while (potencia >= 1) {
    resultado = resultado * numero
    potencia--
}

console.log(resultado)