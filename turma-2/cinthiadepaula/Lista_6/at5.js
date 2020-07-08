let rs = require('readline-sync');

let palavra = rs.question('Digite uma palavra ');


console.log(`a terceira letra desse nome é: ${palavra.charAt(2)}`);

