let rs = require('readline-sync')

let PlayerA = rs.question('Digite o nome do primeiro jogador: ')
let PlayerB = rs.question('Digite o nome do segundo jogador: ')


let numberA = rs.questionInt(`${PlayerA} digite um numero: `)
let numberB = rs.questionInt(`${PlayerB} digite outro numero: `)

let numeroCorreto = 100

function verificaNumero(n1, n2){
    if (n1 == numeroCorreto){
        console.log(`Parabens ${PlayerA} você acertou o numero correto! `)
    } else if(n2 == numeroCorreto){
        console.log(`Parabens ${PlayerB} você acertou o numero correto! `)
    } else {
        console.log('Nenhum dos jogadores acertaram o numero corretamente! ')
    }
}

verificaNumero(numberA, numberB)