let rs = require('readline-sync');

let palavra = rs.question('Insira uma Palavra: ');
let novapalavra = '';
let i = palavra.length - 1;

while(i >= 0)
{
    novapalavra += palavra[i];
    i--;
}

console.log(novapalavra);
