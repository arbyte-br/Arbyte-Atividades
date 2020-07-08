let readline = require('readline-sync');

let num = readline.questionInt('Digite um numero: ');

if (verificaNumeroPrimo(num)) {
    console.log('É número primo');
} else {
    console.log('Não é numero primo;')
}

function verificaNumeroPrimo(numero) {
    if (numero > 0) {
        for (let i = 2; i < numero; i++)
            if (numero % i === 0) {
                return false;
            } else {
                return numero > 1;
            }

    } else {
        return 'Valor negativo';
    }
}