let readlineSync = require('readline-Sync')

let n1 = readlineSync.questionInt('Digite o numero menor ')
let n2 = readlineSync.questionInt('Digite o numero maior ')


for (n1; n1 <= n2; n1 = n1 +1) {
    console.log(n1)
}
console.log('Final da contagem')
