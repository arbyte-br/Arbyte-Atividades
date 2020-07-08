// (OBRIGATÓRIO) [O censor] - Faça um programa que receba uma frase e troque a
// palavra ‘bosta’ por ‘estrume’. (eu sei, nosso trabalho como programador de vez em
// quando é uma estrume).
// Utilize o método replace()

let rs = require('readline-sync')

let frase = rs.question('Insira uma frase que tenha a palavra "bosta" : ')

console.log(frase.replace("bosta", "estrume"))