let readline = require("readline-sync")

let numero = readline.questionInt("Qual o número ? ")

var resultado = 1

while (numero > 0) {
    if (resultado % 2 == 0 ) {
        console.log(resultado)
    }
    resultado++
    numero--
}