let readlineSync = require('readline-sync')
let pares = 0
let final = readlineSync.questionInt('Digite um número ')

while (pares <= final) {
    console.log(pares)
    pares = pares + 2;
}
console.log('Fim!')