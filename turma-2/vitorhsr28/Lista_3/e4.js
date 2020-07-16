let rs = require('readline-sync')

let n1 = rs.questionInt('Insira um numero: ')
let i = 0

while (i <= n1) {
    console.log(i)
    i = i + 2
}