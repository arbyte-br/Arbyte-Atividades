let rs = require('readline-sync')

let palavra = rs.question('Digite uma palavra: ')
palavra = palavra.toLowerCase();
let contador = 0;
let finalLoop = palavra.length;
let vogais = ['a','e','i','o','u'];
let resultado = '';
for(contador; contador < finalLoop; contador++) {
    let character = palavra[contador];
    let containVogal = vogais.indexOf(character) > -1;
    resultado = `${resultado} ${containVogal ? character.toUpperCase() : character}`;
}
console.log(resultado);