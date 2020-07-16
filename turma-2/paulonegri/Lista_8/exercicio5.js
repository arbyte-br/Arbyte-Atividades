/*Crie um programa que pergunte o nome do usuário e peça para este usuário digitar 3
números, o programa deve imprimir, no formato de um objeto, o nome e os números
informados.*/

let rs = require(`readline-sync`)
let usuario = {}
usuario.nome = rs.question(`Qual o seu nome?\n`)
console.clear()
usuario.primerioNumero = rs.question(`Digite um numero >`)
usuario.segundoNumero = rs.question(`Digite um numero >`)
usuario.terceiroNumero = rs.question(`Digite um numero >`)

console.log(usuario)