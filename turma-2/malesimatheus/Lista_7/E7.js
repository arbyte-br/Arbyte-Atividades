function numeroAbsoluto(numero) {
    if(numero < 0) {
        console.log((-1) * numero);
    } else {
        console.log(1 * numero);
    }
}

let rs = require('readline-sync');

let numero = rs.question('Insira o numero: ');

numeroAbsoluto(numero);