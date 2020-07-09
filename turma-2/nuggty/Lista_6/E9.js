let user = require('readline-sync');

let frase = user.question('Escreva uma frase: \n');

for(let i = 0; i < frase.length; i++) {

    let palavra = frase.replace('bosta', 'estrume');
    frase = palavra
}
console.log(frase)