// (OBRIGATÓRIO) [O censor] - Faça um programa que receba uma frase e troque a
// palavra ‘bosta’ por ‘estrume’. (eu sei, nosso trabalho como programador de vez em
// quando é uma estrume) .
// Utilize o método replace()

let rs = require('readline-sync')

let frase = rs.question('Digite uma frase com a palavra "bosta": \n')

let troca = frase.replace('bosta','estrume')

console.log (troca)