let rs = require("readline-sync")

let numero1 = rs.questionInt("Digite um número: ")

let numero2 = rs.questionInt("Digite outro número: ")


function soma(Sominha) {
    return numero1 + numero2
}
console.log(soma())