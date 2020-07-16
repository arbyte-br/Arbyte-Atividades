//Faça um programa que receba um nome e imprima a terceira letra do nome. 
//Utilize o método ​charAt()​ para esta atividade. 

let rs = require("readline-sync")

let respostaUsuario = rs.question("Digite um nome:")


console.log("A terceira letra do nome é: " + respostaUsuario.charAt(2))