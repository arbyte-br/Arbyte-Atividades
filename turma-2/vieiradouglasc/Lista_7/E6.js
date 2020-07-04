// Escreva uma aplicação em JS que receba um número do usuário e
// verifique se o número informado está entre 1 e 10. Se estiver, sua aplicação deve
// imprimir no console a mensagem "Número OK!". Se não, deve ser impresso "O número
// deve ser de 1 a 10!". A verificação do número deve ser feita em uma função.

let readlineSync = require('readline-sync');

let num = readlineSync.questionInt('Insira um número de 1 a 10: ')
let contador = 1

function maior(num) {
    if (num <= 10) {
        return 'Número OK!'
    } else {
        return 'O número deve ser de 1 a 10!'
    }
}
console.log(maior(num))