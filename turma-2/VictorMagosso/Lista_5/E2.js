let rs = require('readline-sync')

let ni = rs.questionInt('Insira o valor inicial da contagem: ')
let nf = rs.questionInt('Insira o valor final da contagem: ')

for (ni; ni<=nf; ni++){
    console.log(ni)
}
console.log('====================')