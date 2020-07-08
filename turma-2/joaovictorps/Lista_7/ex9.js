function validarNumero(numero) {
    if (numero > 0) {
        return true
    } else {
        return false
    }
}

function verificarNumeroEhPrimo(numero) {
    let achouDivisor = false
    if (numero === 1) {
        return false
    }

    for (let i = 2; i < numero; i++){
        if (numero % i === 0) {
            achouDivisor = true
        }
    }
    if ( achouDivisor) {
        return false
    } else {
        return true
    }
}
let rs = require('readline-sync')

let numUsuario = -1
while (!validarNumero(numUsuario)) {
   numUsuario = rs.questionInt('Digite um numero inteiro e positivo. \n >')
}
/*============================================= 
               USANDO TERNARIO 
===============================================
console.log(verificarNumeroEhPrimo(numUsuario) 
    ? `${numUsuario} é um número PRIMO` 
    : `${numUsuario} NÃO é um número PRIMO`)
 */
if (verificarNumeroEhPrimo(numUsuario)) {
    console.log(`${numUsuario} é um número PRIMO`)
} else {
    console.log(`${numUsuario} NÃO é um número PRIMO`)
}