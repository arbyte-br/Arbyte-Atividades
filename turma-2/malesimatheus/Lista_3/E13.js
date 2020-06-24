let rs = require('readline-sync');

let numero = rs.question('Insira 5 numeros separados por virgula: ');

let array = numero.split(',');

let soma = 0;

let multiplicacao = 1;

let i = 0

while (i < 5) {
    if (array[i] % 2 == 0) {
        soma = soma + Number(array[i]);
        i = i + 1;
    } else {
        multiplicacao = multiplicacao * Number(array[i]);
        i = i + 1;
    }
}
console.log('Produto dos impares = ' + multiplicacao);
console.log('Soma dos pares = ' + soma);
