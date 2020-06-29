let rs = require('readline-sync')

n1 = rs.questionInt('Digite o primeiro número: ')
n2 = rs.questionInt('Digite o segundo número: ')

if (n1 % n2 === 0) {
    console.log(`${n1} é divisivel por ${n2}`)
}else {
    console.log(`${n1} não é divisivel por ${n2}`)
}