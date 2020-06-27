let rs = require('readline-sync');


let palavra = rs.question('Digite uma palavra: ');
palavra = palavra.toLowerCase();
let contador = 0;
let loopEnd = palavra.length;
let vogais = ['a', 'e', 'i', 'o', 'u'];
let numVogais = 0;
let numConsoantes = 0;

console.log(palavra); 

for (contador; contador < loopEnd; contador++) {
    let caracter = palavra[contador];
    let containVogal = vogais.indexOf(caracter) > -1;

    if (containVogal) {
        numVogais++;
    } else {
        numConsoantes++;
    }
}
console.log(`O numero de consoantes é ${numConsoantes}`);
console.log(`O numero de vogais é ${numVogais}`);