let rs = require('readline-sync');

let palavra = rs.question('Digite uma palavra');


let sub = palavra.endsWith('al', `${palavra}`);

console.log(sub);

