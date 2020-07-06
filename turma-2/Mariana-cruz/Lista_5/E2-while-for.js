let rs = require ('readline-sync')

console.log('Olá, usuário!')

console.log('Digite um número inteiro')
let valor1 = rs.questionInt("")

console.log('Digite outro número inteiro')
let valor2 = rs.questionInt("")

let resultado = 0

for(let contador=0; contador!==valor2;contador++){
    resultado=resultado+ valor1
    console.log('O resultado é: ' + resultado)
}