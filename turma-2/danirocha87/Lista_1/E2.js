// Faça um programa que receba um número do usuário e verifique se
//este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR”

let rs = require("readline-sync")

let numero = rs.question("Digite um numero ")
 
if(numero % 2 === 0){
   console.log("Este numero é par")
} else{
    console.log("Este numero é impar")
}