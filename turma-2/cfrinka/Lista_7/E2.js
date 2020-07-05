let rs = require("readline-sync")
let numero = rs.questionInt('Digite um número: ')
let divisores = ''
let i = 0

function isPrime(){
    for (i = 1 ; i <= numero ; i++)
    if (numero % i ==0) {
        divisores++
    }
    if (divisores == 2) {
        console.log('O número é primo')
    } else {
        console.log('O número não é primo')
    }
}

isPrime()
