let rs = require ('readline-sync')

console.log('Olá, usuário!')

console.log("Insira um número: ")
let respostaUsuario = rs.questionInt("")

for (let contador = 0; contador < respostaUsuario; contador++ ){
    console.log("BIP BIP")
}