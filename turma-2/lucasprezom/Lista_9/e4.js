// 4.(OBRIGATÓRIO)​ Faça um algoritmo que receba um número
//  e diga se ele é primo ou não
//  Utilize o pacote : ​https://www.npmjs.com/package/prime-number

let rs = require ('readline-sync')

const isPrime = require('prime-number')
 
let numeroUser = rs.questionInt('Digite um número:\n')
    
    if (isPrime(numeroUser) === true) {
        console.log('O número é primo!')
    } else {
        console.log ('O número não é primo!')
    }
