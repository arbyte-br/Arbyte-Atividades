// ​Faça um programa que receba um nome e imprima a terceira letra do 
// nome. 
// Utilize o método ​charAt()​ para esta atividade. 

let rs = require("readline-sync")

let nome = rs.question("insira um nome: \n")

console.log(nome.charAt(2))