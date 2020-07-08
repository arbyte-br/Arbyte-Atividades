let rs = require('readline-sync')

let n1 = rs.questionInt('Digite um número: ')
let n2 = rs.questionInt('Digite outro número: ')
function soma(n1, n2) {
    return n1 + n2
    
}

console.log(soma(n1, n2))