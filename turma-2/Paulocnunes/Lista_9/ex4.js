let ehPrimo = require('prime-number')
let rs = require('readline-sync')

let numero = rs.questionInt('Digite qual número deseja saber se é primo ou não: \n')

if ( ehPrimo(numero) === true ) {
    console.log(numero + ' É PRIMO!')
} else {
    console.log(numero + ' NÃO É PRIMO!')
}