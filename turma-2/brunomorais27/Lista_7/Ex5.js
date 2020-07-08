let rs = require('readline-sync')

function valores() {
    return console.log(n1 + n2)
}

let n1 = rs.questionInt('Digite um numero: \n')
let n2 = rs.questionInt('Digite outro numero: \n ')

valores(n1, n2)