let rs = require('readline-sync')

let primeiroNumero = rs.questionInt('Digite o primeiro valor: ')
let segundoNumero = rs.questionInt('Digite o ultimo valor: ')

for(let i = primeiroNumero; i <= segundoNumero;i++){
console.log(i)
}