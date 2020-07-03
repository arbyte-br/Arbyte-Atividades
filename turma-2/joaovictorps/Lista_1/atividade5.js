let rs = require('readline-sync')

let numeros = []

for( let i = 0; i <3; i++) {
    let num = rs.questionInt('Digite um número: ')
    numeros.push(num)
}
console.log(numeros.sort().join(', '))