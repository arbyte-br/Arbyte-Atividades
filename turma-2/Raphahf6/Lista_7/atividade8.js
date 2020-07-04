let rs = require('readline-sync')

let PlayerA = rs.question('Digite o nome do primeiro jogador: ')
let PlayerB = rs.question('Digite o nome do segundo jogador: ')

let numberA = rs.questionInt(`${PlayerA} digite um numero: `)
let numberB = rs.questionInt(`${PlayerB} digite outro numero: `)



function verificaNumero(n1, n2) {
    let numeroCorreto = 40
    let resposta1 = 0
    let resposta2 = 0

    if (numeroCorreto < n1) {
         resposta1 = n1 - numeroCorreto
    } else if (numeroCorreto < n2) {
         resposta2 = n2 - numeroCorreto
    } else {
         resposta1 = numeroCorreto - n1
         resposta2 = numeroCorreto - n2
    }

    if (resposta1 > resposta2) {
        console.log(`Parabens ${PlayerA} seu numero foi oque chegou mais proximo de ${numeroCorreto}`)
    } else if (resposta1 < resposta2) {
        console.log(`Parabens ${PlayerB} seu numero foi oque chegou mais proximo de ${numeroCorreto}`)

    }
}

verificaNumero(numberA, numberB)