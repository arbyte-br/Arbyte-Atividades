let rs = require('readline-sync');

let numero = Number(rs.question('Insira o numero: '));

let i = 1

while (i <= numero) {
    if (numero % i == 0) {
        console.log(i);
        i = i + 1;
    } else {
        i = i + 1;
    }
}