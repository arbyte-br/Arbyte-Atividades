let rs = require('readline-sync');

let numero = rs.question('Insira um número de 1 a 9: ')

function tabuada(numero) {
    for(let i = 1; i <= 10; i ++) {
        console.log(i + ' x ' + numero + ' = ' + (i * numero));
    }
}

tabuada(numero)