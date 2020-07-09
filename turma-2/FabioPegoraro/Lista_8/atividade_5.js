//Crie um programa que pergunte o nome do usuário e peça para este usuário digitar 3 números, 
//o programa deve imprimir, no formato de um objeto, o nome e os números informados.

let rs = require("readline-sync")

let nome = rs.question("Qual é o seu nome?\n")
let n1 = rs.question("Digite um nuemro?")
let n2 = rs.question("Digite um nuemro?")
let n3 = rs.question("Digite um nuemro?")

let usuario = {
    nomeUsuario: nome,
    numeros: [n1, n2, n3],
}

console.log(usuario)
