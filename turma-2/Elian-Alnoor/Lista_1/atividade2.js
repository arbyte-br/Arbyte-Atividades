// Faça um programa que receba um número do usuário e verifique se 
// este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR” 
 
let rs = require("readline-sync")

let num = rs.questionInt("Digite um número:\n")

if(num % 2 === 0){
    console.log("Par")
} else{
    console.log("Impar")
}