/* (OBRIGATÓRIO) Faça um programa que receba um nome e imprima a terceira letra do
nome.
Utilize o método charAt() para esta atividade.
 */

 let rs = require('readline-sync')

 let nome = rs.question("Digite um nome: \n")
 console.clear()

 console.log(nome.charAt(3))