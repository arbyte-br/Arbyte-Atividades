//Faça um programa que receba uma palavra e verifica se ela terminacom “al” 
//se termina com “al” então imprime a palavra se não imprime “palavra nãoidentificada”.
// Utilize o método ​endsWith()

let rs = require("readline-sync")

let palavra = rs.question("Digite uma palavra que termine com al: ").toLowerCase

if (palavra.endsWith('al')) {
    console.log(palavra)
} else {
    console.log('Palavra não identificada.')
}