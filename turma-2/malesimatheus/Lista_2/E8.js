let rs = require('readline-sync');

let palavra = rs.question('insira uma palavra: ');

let original = palavra.split('');

let primeiraLetra = original[0];

let letraMaiuscula = primeiraLetra.toUpperCase();

if (primeiraLetra === letraMaiuscula) {
    console.log('A letra é maiúscula');
} else {
    console.log('A letra é minúscula');
}