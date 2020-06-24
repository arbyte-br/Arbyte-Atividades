let rs = require('readline-sync')

let n1 = rs.questionFloat('Digite o primeiro numero: ')
let n2 = rs.questionFloat('Digite o segundo numero: ')

//n2 vai ser a quantidade de vezes que ele vai repetir ele mesmo (2 * 3 = (2 + 2 + 2))

while (n2 > 0) {
    let res = n1 + n1
    console.log(res)
    n2--
    break    
}
console.log('==============')
