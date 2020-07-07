let rs = require("readline-sync")

let senhaUsuario = rs.questionInt("Insira a senha: ")

if (senhaUsuario === 1234) {
    console.log("Acesso permitido!")
} else {
    console.log("Acesso negado!")
}