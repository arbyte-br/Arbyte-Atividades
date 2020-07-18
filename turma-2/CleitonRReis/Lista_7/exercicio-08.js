/*
8.(Não é obrigatória mas é divertida) Escreva uma aplicação em JS que receba dois usuários. 
De cada usuário, a aplicação deve receber um número de 1 a 100. A aplicação deve informar qual 
dos usuários chegou mais perto do número correto. (Você pode escolher qual vai ser o número correto)
*/

const rs = require('readline-sync');

console.log('\n============= Jogador 1 =============\n');

let jogador1 = rs.question('Informe um número entre 1 e 100: ');

console.log('\n============= Jogador 2 =============\n');

let jogador2 = rs.question('Informe um número entre 1 e 100: ');

let numeroCorreto = 10;

function numero() {
    if (jogador1 < 1 || jogador1 > 100 || jogador2 < 1 || jogador2 > 100) {
        console.log('\nO número deve estar entre 1 e 100!\n');
    } else if (jogador1 == numeroCorreto && jogador2 == numeroCorreto) {
        console.log('\nParabéns! Os dois jogadores acertaram o número exato!\n');
    } else if (jogador1 == numeroCorreto) {
        console.log('\nJogador 1 acertou o número exato!\n');
    } else if (jogador2 == numeroCorreto) {
        console.log('\nJogador 2 acertou o número exato!\n');
    } else if (jogador1 - jogador2 < jogador2 - numeroCorreto) {
        console.log('\nO jogador 1 chegou mais próximo do número correto.\n');
    } else if (jogador2 - jogador1 < jogador1 - numeroCorreto) {
        console.log('\nO jogador 2 chegou mais próximo do número correto.\n');
    } else if (jogador1 > jogador2) {
         console.log('\nO jogador 1 chegou mais próximo do número correto.\n');
    } else if (jogador2 > jogador1) {
         console.log('\nO jogador 2 chegou mais próximo do número correto.\n');
    } else {
        console.log('\nOs números digitados são iguais, logo os dois chegaram próximo ao número correto.\n');
    }

}
numero();