let rs = require ('readline-sync')

console.log('Olá, usuário!')


console.log("Digite um número: ")
let limite = rs.questionInt("")

let contador = 0

while(contador <= limite) {
    console.log("contador: " + contador)
    contador= contador +2
}