let rs = require('readline-sync');
let palavra = rs.question('Insira uma palavra: ');
let i = 0;

while(palavra){
    console.log(palavra.split('').reverse().join(''));
    i--;
    break;
    }