//Faça um programa que receba um nome e imprima a terceira letra do nome.
//Utilize o método charAt() para esta atividade.

let rs = require('readline-sync')
let palavra = rs.question('Digite um nome: ')
let terceiraLetra = []

terceiraLetra.push(palavra.charAt(2))
console.log(`Essa é a terceira letra do nome informado: ${terceiraLetra} `)