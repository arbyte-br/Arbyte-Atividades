let user = require('readline-sync');

let nome = user.question('Insira seu nome: \n');

console.log('A terceira letra do seu nome é '+ nome.charAt(2).toUpperCase());