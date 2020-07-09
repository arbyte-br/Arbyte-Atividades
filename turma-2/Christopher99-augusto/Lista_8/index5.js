let rs = require("readline-sync")

let nome = rs.question('Qual seu nome? ')

let numero = rs.questionInt("Digite um número: ")

let numero1 = rs.questionInt("Digite um número: ")

let numero2 = rs.questionInt("Digite um número: ")

let numeroUser = {
    numero: numero , numero1: numero1 , numero2: numero2 
}
console.log(numeroUser)
