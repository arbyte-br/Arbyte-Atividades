let rs = require('readline-sync');
let palavra = rs.question('Insira uma palavra: ');
let i = 0;
let fim = palavra.length;
let vogais = ['a','e','i','o','u']
let resultado = '';

while (i < fim) {
    i++
    let character = palavra[i];
    let containVogal = vogais.indexOf(character);


    resultado = `${resultado} ${containVogal ? character.toUpperCase(): character}`;
}
console.log(resultado);