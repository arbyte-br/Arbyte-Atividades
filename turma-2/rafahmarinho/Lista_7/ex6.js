// (OBRIGATÓRIO) Escreva uma aplicação em JS que receba um número do usuário e
// verifique se o número informado está entre 1 e 10. Se estiver, sua aplicação deve
// imprimir no console a mensagem "Número OK!". Se não, deve ser impresso "O número
// deve ser de 1 a 10!". A verificação do número deve ser feita em uma função.

let rs = require('readline-sync')

function numero(n1) {
    if (n1 > 0 && n1 <= 10){
        return console.log('Número OK!')
    }else {
        return console.log('O número deve ser de 1 a 10!')
    }
}