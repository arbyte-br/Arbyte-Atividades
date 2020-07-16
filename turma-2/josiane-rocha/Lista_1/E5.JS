let rs = require("readline-sync");

let numero1 = readline.questionInt("Digite o primeiro número inteiro: ")
let numero2 = readline.questionInt("Digite o segundo número inteiro: ")
let numero3 = readline.questionInt("Digite o terceiro número inteiro: ")

if (numero1 < numero2 && numero1 < numero3) {
    if (numero2 < numero3) {
        console.log(numero1, numero2, numero3)
    } else {
        console.log(numero1, numero3, numero2)
    }
}