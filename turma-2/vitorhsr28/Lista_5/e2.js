let rs = require ('readline-sync')
let n1 = rs.questionInt('Digite o numero inicial: ')
let n2 = rs.questionInt('Insira o numero final: ')

console.log ('Contagem:')
for (n1; n1 <= n2; n1++) {
    console.log (n1)
}
console.log ('Final da contagem.')