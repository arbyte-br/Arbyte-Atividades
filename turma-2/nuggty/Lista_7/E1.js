let rs = require('readline-sync');

let perguntaRaio = rs.question('Digite um número: ');

function raio() {
    return 4 / 3 * Math.PI * perguntaRaio ** 3
}

console.log(raio(perguntaRaio));