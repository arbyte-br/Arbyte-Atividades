let rs = require('readline-sync');

let letras = rs.question('Escreva uma palavra: ')

while(letras) {
    console.log(letras.split('').reverse('').join(''));
    break;
}