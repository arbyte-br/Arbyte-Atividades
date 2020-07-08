// Escreva um programa javascript para escrever o seguinte padrão na
// tela, com N linhas:
// *
// * *
// * * *
// * * * *
// * * * * *

let rs = require("readline-sync")

numero = rs.questionInt("Quantas linhas quer? ")

let i = 1
string = ""
while ( i <= numero) {
    string = string + " * " 
    console.log(string)
    i++
}