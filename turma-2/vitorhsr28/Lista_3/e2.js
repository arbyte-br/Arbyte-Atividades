let rs = require('readline-sync')
let n1 = rs.questionInt('Informe o primeiro numero: ')
let n2 = rs.questionInt('informe o segundo numero: ')
let i = 1
let resultado = n1

while (i < n2) {
    n1 = resultado + n1
    ++i
}
console.log (n1)