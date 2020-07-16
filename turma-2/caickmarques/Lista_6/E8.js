let rs = require('readline-sync');

let palavra = rs.question('Digite uma palavra: ');

let vogais = palavra.includes('a', 'e', 'i', 'o', 'u');

if (vogais) {
    console.log('Existe vogais na palavra');
} else {
    console.log('Não tem vogais na palavra');
}