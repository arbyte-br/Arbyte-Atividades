// ​Faça um programa que receba uma palavra e verifica se ela termina 
// com “al” se termina com “al” então imprime a palavra se não imprime “palavra não 
// identificada”. 
// Utilize o método ​endsWith() 

let rs = require("readline-sync")

let palavra = rs.question("insira uma palavra:\n")

if (palavra.endsWith("al")){
    console.log(palavra)
} else{
    console.log("Palavra não identificada!")
}