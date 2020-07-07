let rs = require('readline-sync')

let anoNascimento = rs.question("Qual o seu ano de nascimento?\n>>")
let anoAtual = rs.questionInt("Em qual ano estamos?\>>")
let idadeMinima = 18

if (anoNascimento < anoAtual-idadeMinima){
    console.log("Você poderá votar neste ano!")
}
else {
    console.log("Você não poderá votar neste ano")
}