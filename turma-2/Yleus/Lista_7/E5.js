let rs = require('readline-sync')

let n1 = rs.questionInt ('Digite um numero:\n>>')
let n2 = rs.questionInt ('Digite outro numero:\n>>')

function soma(n1,n2) {
    return n1 + n2
}

console.log (soma(n1,n2))