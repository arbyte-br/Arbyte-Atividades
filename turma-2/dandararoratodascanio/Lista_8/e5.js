// Crie um programa que pergunte o nome do usuário e peça para este usuário digitar 3
// números, o programa deve imprimir, no formato de um objeto, o nome e os números
// informados.

let rs = require('readline-sync')

let nome = rs.question("Qual é o seu nome? ")


let numeros = []

for (let i = 0; i < 3; i++) {
    let numeroUsuario = rs.question("Digite um número: \n" )
    numeros.push(numeroUsuario)
}

let objeto = { nome: nome, numeros: numeros}

console.log(objeto)