//Faça um programa que receba um nome e imprima a terceira letra do nome.
//Utilize o método ​charAt()​ para esta atividade.

let rs = require("readline-sync")

let nome = rs.question("Digite um nome: ")

console.log('A terceira letra desse nome é: ' + nome.charAt(2))