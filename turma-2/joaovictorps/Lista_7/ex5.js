let rs = require('readline-sync')

function soma(n1=0, n2=0) {
    return `${n1} + ${n2} = `+ (n1 + n2)
}

let n1 = rs.questionInt('Digite um numero: ')
let n2 = rs.questionInt('Digite outro numero: ')

console.log(soma(n1, n2))