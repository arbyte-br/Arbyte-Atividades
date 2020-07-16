let rs = require('readline-sync')

function primo(n = rs.questionInt('Digite um numero maior que 0: ')){
    if(!n < 0){
    if (n%2 == 0 || n%3 == 0){
        return false
    }else{
        return true
    }
    }
}
console.log(`O numero e primo? ${primo()}`)

