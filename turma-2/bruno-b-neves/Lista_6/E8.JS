
let rs = require('readline-sync');

let palavra = rs.question('Digite uma palavra: ');

let vogais = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;
let endLoop = palavra.length;
let numVogais = 0;


for (contador; contador < endLoop; contador++) {
    let caracter = palavra[contador];
    let containVogal = vogais.indexOf(caracter) > -1;

    if (containVogal) {
        numVogais++;
    }
}

if (numVogais > 0) {
    console.log('Contem Vogais');
} else {
    console.log('Nao contem vogais');
}