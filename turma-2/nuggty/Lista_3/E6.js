let rs = require('readline-sync');

let palavra = rs.question('Escreva uma palavra: ')
let invertePalavra = '';
let i = palavra.length - 1;

while(i >= 0){
    invertePalavra += palavra[i];
    i--;
}
console.log(invertePalavra);