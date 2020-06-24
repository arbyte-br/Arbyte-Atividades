let rs = require('readline-sync');

let numero = Number(rs.question('Insira o numero que deseja '));

while (numero >= 0) {
    if (numero % 2 == 0) {
        console.log(numero);
        numero = numero - 2;
    } else {
        numero = numero - 1;
    }
}