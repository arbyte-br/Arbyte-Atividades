let rs = require("readline-sync")


let perguntaUsuario = rs.questionInt("Insira um número: ")

let total = perguntaUsuario / 2

let resultado = total % 2 == 0 ? "par" : "ímpar"

console.log(perguntaUsuario + " é " + resultado)

