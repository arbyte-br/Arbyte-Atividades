let rs = require("readline-sync")

let numero1 = rs.questionInt("Digite um numero")

let numero2 = rs.questionInt("digite outro numero")

function soma(numero1, numero2){
    return numero1 + numero2
}

console.log(soma(numero1, numero2))