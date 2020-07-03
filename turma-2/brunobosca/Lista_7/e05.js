let rs = require('readline-sync')

let n1 = rs.questionInt('Escreva um número: ');
let n2 = rs.questionInt('Edcreva outro número: ');

function comparaNumero () {
    if (n1 < n2) {
        console.log (`${n1} é menor`)
    } else {
        console.log (`${n2} é menor`)
    }
}

comparaNumero()
