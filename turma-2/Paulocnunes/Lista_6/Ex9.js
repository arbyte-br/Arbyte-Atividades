// Faça um programa que receba uma frase e troque apalavra ‘bosta’ por ‘estrume’. ​(eu sei, nosso trabalho como programador de vez emquando é uma estrume)​

let rs = require('readline-sync')

let frase = rs.question('Escreva uma frase que contenha a palavra ~bosta~: ')

console.log(frase.replace('bosta' , 'estrume'))