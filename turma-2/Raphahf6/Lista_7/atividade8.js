let rs = require('readline-sync')

let PlayerA = rs.question('Digite o nome do primeiro jogador: ')
let PlayerB = rs.question('Digite o nome do segundo jogador: ')

let numberA = rs.questionInt(`${PlayerA} digite um numero: `)
let numberB = rs.questionInt(`${PlayerB} digite outro numero: `)

let numeroCorreto = 100

function verificaNumero(n1, n2){
    let resposta1 = n1 - numeroCorreto
    let resposta2 = n2 - numeroCorreto

    if(resposta1 > resposta2){
        console.log(`Parabens ${PlayerA} seu numero foi oque chegou mais proximo de ${numeroCorreto}`)
    } else if(resposta1 < resposta2){
        console.log(`Parabens ${PlayerB} seu numero foi oque chegou mais proximo de ${numeroCorreto}`)

    } 
}

verificaNumero(numberA, numberB)