let rs = require("readline-sync")

let perguntaUsuario = rs.questionInt("Digite um número de 1 a 10: ")

if (perguntaUsuario >= 1 && perguntaUsuario <= 10) {
    console.log("Número OK!")
} else {
    console.log("Número incorreto, ele deve ser de 1 a 10!")
}