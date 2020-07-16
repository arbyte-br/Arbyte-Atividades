let rs = require('readline-sync')

let i = 1
let soma = 0

while (i <= 1000) {
    if((i%3 === 0) && (i%5 === 0)) {
        soma += i
        console.log('Divisor: ' + i)
    }
    i++
}

