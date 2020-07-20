const rs = require('readline-sync')

const n1 = rs.questionInt ('Informe um número: ')
const n2 = rs.questionInt ('Informe outro número: ')

function comparar (n1,n2) {
    if (n1 > n2) {
        return `O menor número é ${n2}`
    } else if (n1 === n2) {
        return `Os números são iguais`
    } else {
        return `O menor número é ${n1}`
    }
}

console.log (comparar (n1,n2))