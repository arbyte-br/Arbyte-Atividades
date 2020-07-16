let rs =require('readline-sync');

let nome = rs.question('Digite seu nome: ')

console.log(`A terceira letra do seu nome é ${nome.charAt(2)}`);