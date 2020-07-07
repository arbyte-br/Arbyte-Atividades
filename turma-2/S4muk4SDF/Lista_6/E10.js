let rs = require("readline-sync")


let perguntaUsuario = rs.question("Transforme qualquer palavra ou frase em maiúsculo: ")

let resultado = perguntaUsuario.toUpperCase()

console.log(resultado)