let rs = require('readline-sync')

function valores() {
    return console.log(n1 + n2)
}

let n1 = rs.questionInt('Digite um número: ')
let n2 = rs.questionInt('Digite outro número: ')

valores(n1, n2)