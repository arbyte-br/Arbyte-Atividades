//Faça um programa que receba uma palavra e diga se há vogais ou não.
//Utilize o método ​ indexOf()

let rs = require('readline-sync');

let palavra = rs.question('insira uma palavra:');
let vogais = ['a', 'e', 'i', 'o', 'u']


p = palavra.indexOf('a', 'e', 'i', 'o', 'u')
if (p === 1) {
    console.log('há vogais')
} else {
    console.log('não há vogais')
}


