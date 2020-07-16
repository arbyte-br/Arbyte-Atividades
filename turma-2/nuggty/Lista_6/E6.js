let user = require('readline-sync');

let palavra = user.question('Insira uma palavra: \n');
let final = palavra.endsWith('al');

switch(final) {
    case true:
        console.log(palavra);
        break;
    default:
        console.log('Palavra não identificada');
        break;
}