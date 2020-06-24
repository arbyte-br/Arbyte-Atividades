let rs = require('readline-sync');

let palavra = String(rs.question('Bem vindo ao inversor! Insira uma palavra: '));

let array = palavra.split('');

let reversao = array.reverse();

console.log(reversao.join(''));