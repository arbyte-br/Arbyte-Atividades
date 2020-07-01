let rs = require('readline-sync')

function valorAbsoluto(n){
    n = rs.questionInt("Digite um numero: ")

    if (n < 0){
        return console.log(`O valor absoluto do numero indicado e ${n*(-1)}`)
    }else{
        return console.log(`O valor absoluto do numero indicado e ${n}`)
    }
}
valorAbsoluto()

