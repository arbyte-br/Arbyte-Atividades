//Faça um programa que receba um nome e imprima a terceira letra do nome.
//Utilize o método charAt() para esta atividade.

let rs = require('readline-sync')
let palavra = rs.question('Digite um nome: ')



console.log(`Essa é a terceira letra do nome informado: ${palavra.charAt(2)} `)