//Faça um programa que receba um número do usuário e verifique se este número é par ou ímpar, escrevendo na tela “PAR” ou “ÍMPAR” 

let rs = require("readline-sync")

let n = rs.question("Digite um numero: ")


if(n % 2 === 0){
    console.log("PAR")
}else{
    console.log("IMPAR")
}