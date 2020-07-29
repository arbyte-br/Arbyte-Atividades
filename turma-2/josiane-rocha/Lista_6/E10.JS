let rs = require('readline-sync');


let nome = rs.question('insira seu nome: ');

console.log(`terceira letra do nome -> ${nome.charAt(3).toLocaleUpperCase()}`);