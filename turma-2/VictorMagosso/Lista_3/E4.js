let rs = require('readline-sync')

let numero = rs.questionInt('Digite um numero: ')
let pares = 0

while (pares <= numero){
    console.log(pares)
    pares = pares + 2
}
console.log('FIM')
