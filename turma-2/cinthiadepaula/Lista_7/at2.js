let rs = require('readline-sync');

let numero = rs.questionInt('digite um numero: ')

function verificando(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0)
            return false
    }
    return true;
}


console.log(verificando(numero));

