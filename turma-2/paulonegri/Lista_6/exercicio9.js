//Faça um programa que receba uma frase e troque a
//palavra ‘bosta’ por ‘estrume’. (eu sei, nosso trabalho como programador de vez em
//quando é uma estrume) .
//Utilize o método replace()

let rs = require('readline-sync')
let texto = rs.question(`Digite uma frase aqui: `)
let novoTexto = texto.replace( 'bosta', 'estrume')
console.log(novoTexto)
