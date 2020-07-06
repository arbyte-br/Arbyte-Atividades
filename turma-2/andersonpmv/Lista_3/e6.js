let rs = require('readline-sync');
let palavra = rs.question('Insira uma palavra: ');

let palavraReverti = palavra.split('');

console.log(palavraReverti.reverse().join(''))
