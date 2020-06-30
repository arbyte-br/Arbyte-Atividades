let rs = require('readline-sync');

function numeroEPerfeito(numero) {
    let soma = 0;
    for(let i = 1; i < numero; i ++) {
        if(numero % i == 0) {
            soma = soma + i;
        }
    }
    (numero == soma) ? console.log('O número é perfeito!') : console.log('O número NÃO é perfeito!');
    console.log(soma);
}

let numero = Number(rs.question('Insira o numero: '));

numeroEPerfeito(numero);