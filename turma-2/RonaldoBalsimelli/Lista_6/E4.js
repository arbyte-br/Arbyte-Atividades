let rs = require('readline-sync');


let usuario = rs.question('Digite uma palavra e veja a mágica: ');
usuario = usuario.toLowerCase();
let contador = 0;
let separador = usuario.length;
let vogais = ['a', 'e', 'i', 'o', 'u'];
let numeroVogais = 0;
let numeroConsoantes = 0;

console.log(usuario); 

for (contador; contador < separador; contador++) {
    let caracter = usuario[contador];
    let containVogal = vogais.indexOf(caracter) > -1;

    if (containVogal) {
        numeroVogais++;
    } else {
        numeroConsoantes++;
    }
}
console.log(`O numero de consoantes é ${numeroConsoantes}`);
console.log(`O numero de vogais é ${numeroVogais}`);