let rs = require('readline-sync')

let repeticoes = rs.questionInt('Digite o numero de repetições: ')
let n = 0
let res = '*'

while (repeticoes != n){
    console.log(`${res}`)
    n++
    res = res + '*'

}
console.log('==================')