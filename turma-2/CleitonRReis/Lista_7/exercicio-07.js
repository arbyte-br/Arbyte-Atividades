/*
7.(OBRIGATÓRIO) ​Escreva uma aplicação em JS que receba dois usuários. 
De cada usuário, a aplicação deve receber um número de 1 a 100. A aplicação 
deve informar se algum dos usuários informou o número correto. (Você pode escolher qual vai ser o número correto).
*/

const rs = require('readline-sync');

let jogador1 = rs.question('Informe um número entre 1 e 100: ');

let jogador2 = rs.question('Informe um número entre 1 e 100: ');

let numeroCorreto = 10;

function numero() {
    if (jogador1 < 1 || jogador1 > 100 || jogador2 < 1 || jogador2 > 100) {
        console.log('O número deve estar entre 1 e 100!');
    } else if (jogador1 == numeroCorreto && jogador2 == numeroCorreto) {
        console.log('Parabéns! Os dois jogadores acertaram o número!')
    } else if (jogador1 == numeroCorreto) {
        console.log('Jogador 2 acertou!')
    } else if (jogador2 == numeroCorreto) {
        console.log('Jogador 2 acertou!')
    } else {
        console.log('Nenhum dos jogadores acertou o número. =(')
    }

}
numero();