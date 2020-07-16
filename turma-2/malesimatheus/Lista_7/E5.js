let rs = require('readline-sync');

let numero1 = rs.question('Insira o numero 1: ')
let numero2 = rs.question('Insira o numero 2: ')

function qualEMenor(numero1, numero2) {
    if (numero1 == numero2) {
        console.log('São iguais!');
    } else {
        (numero1 < numero2) ? console.log(numero1 + ' é menor!') : console.log(numero2 + ' é menor!')
    }
}

qualEMenor(numero1, numero2)