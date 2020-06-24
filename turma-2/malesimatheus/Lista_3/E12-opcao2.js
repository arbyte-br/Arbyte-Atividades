let rs = require('readline-sync');

let numero = rs.question('Insira 15 numeros, separados por virgula: ');

let array = numero.split(',');

let i = 0;

let soma = 0

while (i < 15) {
    soma = soma + Number(array[i]);
    i = i + 1;
}
 let media = soma / 15;

 console.log('A media é: ' + media);

