let rs = require ('readline-sync')

console.log('Olá, usuário!')

console.log("Insira um número: ")
let respostaUsuario = rs.questionInt("")

let contador = 0

while (contador < respostaUsuario) {
    console.log("BIP BIP")
    contador++
}


