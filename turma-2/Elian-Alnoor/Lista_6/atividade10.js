// Faça um algoritmo que receba um texto e imprima ele em letras 
// maisuculas.  
// Utilize o método ​toUpperCase() 

let rs = require("readline-sync")

let texto = rs.question("insira um texto:\n")

console.log(texto.toUpperCase())