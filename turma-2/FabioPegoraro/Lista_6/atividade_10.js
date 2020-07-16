//Faça um algoritmo que receba um texto e imprima ele em letras maisuculas.  
//Utilize o método ​toUpperCase()

let rs = require("readline-sync")

let respostaUsuario = rs.question("Digite um nome:")
let textoemMinusculo = respostaUsuario.toUpperCase()

console.log(textoemMinusculo)