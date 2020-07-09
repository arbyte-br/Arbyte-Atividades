// Crie um programa que pergunte o nome do usuário e peça para este usuário digitar 3 números,
// o programa deve imprimir, no formato de um objeto, o nome e os números informados. 

let rs = require('readline-sync')


let usuario =  new Object() 
    usuario.nome = rs.question('Qual o seu nome? \n')
    usuario.num1 = rs.questionInt('Digite um numero: \n')
    usuario.num2 = rs.questionInt('Digite mais um número: \n')
    usuario.num3 = rs.questionInt('Digite um terceiro número: \n')

console.log(usuario)