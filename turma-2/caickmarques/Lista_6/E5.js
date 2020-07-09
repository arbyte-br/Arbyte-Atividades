let rs = require('readline-sync');

let nome = rs.question('Digite o seu nome: ');

console.log(`terceira letra do seu nome é ${nome.charAt(2).toLocaleUpperCase()}`);