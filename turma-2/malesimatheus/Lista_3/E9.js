let rs = require('readline-sync');

let palavra = rs.question('Insira uma palavra: ');

let tamanho = palavra.length;

let i = 0

let array = palavra.split('');

while (i < tamanho) {
    console.log(array[i]);
    i = i + 1;
}