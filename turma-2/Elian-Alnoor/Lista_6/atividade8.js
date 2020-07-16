// ​Faça um programa que receba uma palavra e diga se há vogais ou 
// não.  
// Utilize o método ​indexOf()

let rs = require("readline-sync")

let palavra = rs.question("insira uma palavra:\n")

palavra = palavra.toLowerCase()

if(palavra.indexOf("a") > 0 || palavra.indexOf("e") > 0 || palavra.indexOf("i") > 0 ||
palavra.indexOf("o") > 0 || palavra.indexOf("u") > 0 ){
    console.log("palavra tem vogais")
} else{
    console.log("palavra não tem vogais")
}