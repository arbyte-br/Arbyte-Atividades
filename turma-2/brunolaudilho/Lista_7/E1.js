let readline = require('readline-sync');

let raio = readline.question('Insira o raio do círculo para o calculo do volume: ')

function volumeEsfera (raio){
    let volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
    return volume;

}

console.log(volumeEsfera(raio));