let readlineSync = require('readline-sync')
let numero1 = readlineSync.questionInt('Digite um número ')
let numero2 = readlineSync.questionInt('Digite outro numero ')

while(numero2 > 0) {
    let res = numero1 + numero1
    console.log(res)
    numero2--
    break;
}
console.log('=============')