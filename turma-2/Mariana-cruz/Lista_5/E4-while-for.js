let rs = require ('readline-sync')

console.log('Olá, usuário!')

console.log("Digite um número: ")
let limite = rs.questionInt("")

for (let contador = 0; contador <= limite; contador = contador + 2){
    console.log(contador)
}