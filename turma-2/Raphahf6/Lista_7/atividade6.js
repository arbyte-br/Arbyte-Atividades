let rs = require('readline-sync')

let n1 = rs.questionInt('Digite um numero de 1 a 10: ')

function VerificaNumero(numero){
    while(numero < 0 || numero > 10){
        numero = rs.questionInt('O numero Digitado deve ser maior que 0 e menor que 10 ! Digite um numero de 1 a 10: ')
    }

    console.log('Numero OK!')
}

VerificaNumero(n1)