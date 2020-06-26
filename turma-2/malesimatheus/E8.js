let rs = require('readline-sync');

let palavra = rs.question('Insira uma palavra: ');

let haVogal = 0;
let haConsoante = 0;

let vogais = ['a', 'e', 'i', 'o', 'u'];

for(let i = 0; i < palavra.length; i ++) {
    let letra = palavra.charAt(i);
    (vogais.indexOf(letra) != -1) ? (haVogal = haVogal + 1) : (haConsoante = haConsoante + 1);
}

(haVogal > 0) ? console.log('Há vogais') : console.log('Não há vogais');