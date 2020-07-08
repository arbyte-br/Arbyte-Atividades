let rs = require('readline-sync');

let palavra = rs.question('Digite uma fase que contenha bosta');


let sub = palavra.replace('bosta', 'estrume');

console.log(sub);

