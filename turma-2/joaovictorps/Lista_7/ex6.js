let rs = require('readline-sync')
let numero = 20

function validacao(numero) {
    if ( numero < 1 || numero > 10) {
        numero = rs.questionInt('Digite um numero de 1 a 10: ')
        if (numero < 1 || numero > 10) {
            while ( numero < 1 || numero > 10 ) {
                numero = rs.questionInt('Voce não digitou um numero de 1 a 10, tente novamente: ')
            }
        } else {
            return 'Numero Ok!'
        }
        return 'Numero Ok!'
    }
}

console.log(validacao(numero))
