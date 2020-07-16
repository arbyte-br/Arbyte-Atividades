let rs = require('readline-sync')

let i = 0

let soma = 0
while(i < 1000){
    if (i%3=== 0 && i%5 === 0) {
        soma+= i
    }
    i++
}

console.log(soma)