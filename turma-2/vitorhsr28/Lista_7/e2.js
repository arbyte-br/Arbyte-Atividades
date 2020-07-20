const rs = require('readline-sync')

const numero = rs.questionInt('insira um número:')

function primo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
        return numero > 1;
    }
}

if ((numero) < 0) {
    console.log(`O número digitado precisa ser positivo para atender ao exercício`)
} else if (primo(numero) === false) {
    console.log(`O número ${numero} não é primo`)
} else {
    console.log(`O número ${numero} é primo.`)
}