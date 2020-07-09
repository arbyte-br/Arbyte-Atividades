// Escreva uma aplicação em JS que receba um número do usuário e
// verifique se o número informado está entre 1 e 10. Se estiver, sua aplicação deve
// imprimir no console a mensagem "Número OK!". Se não, deve ser impresso "O número
// deve ser de 1 a 10!". A verificação do número deve ser feita em uma função

let rs = require('readline-sync')

let usuario = rs.questionInt ('Digite um numero:\n')
    function numero(usuario) {
    if (usuario < 0 || usuario > 10) {
        console.log ('O número precisa ser entre 1 e 10')
        } else { 
        console.log ('Numero OK!')
    }
    }
    numero(usuario)

