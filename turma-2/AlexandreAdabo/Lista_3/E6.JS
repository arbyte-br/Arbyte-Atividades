var rs = require('readline-sync');

var palavra = rs.question('Por favor, insira uma palavra: ');
var cont = 0;
while(palavra){
    console.log(palavra.split('').reverse().join(''));
    cont--;
    break;
}