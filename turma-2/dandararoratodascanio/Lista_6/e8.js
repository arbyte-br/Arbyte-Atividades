/* (OBRIGATÓRIO) Faça um programa que receba uma palavra e diga se há vogais ou
não.
Utilize o método indexOf() */

// let rs = require('readline-sync')

// let vogais = "aeiouAEIOU"

// let palavra = rs.question("Digite uma palavra: \n")

// let numeroVogais;

// let palavraVogal = palavra.length

// for (let i = 0; i < palavraVogal; i++) {
//     if (vogais.includes(palavra[i])) {
//         numeroVogais.indexOf(palavra[i])
//         console.log(palavra)
//     } 
// }   
let rs = require("readline-sync")
let palavra = rs.question("Insira uma palavra:\n")

palavra = palavra.toLowerCase()

if (palavra.indexOf("a") >= 0 || palavra.indexOf("e") >= 0 || palavra.indexOf("i") >= 0 ||
palavra.indexOf("o") >= 0 || palavra.indexOf("u") >= 0 ){
    console.log("Palavra tem vogais")
} else{
    console.log("Palavra não tem vogais")
}