/*1. (OBRIGATÓRIO) Crie um programa que:
a. Peça o nome de 2 usuários;
b. Para cada usuário, peça 1 número;
c. Imprima na tela qual usuário digitou o maior número.
d. Pare a execução.
Neste exercício, cada usuário deve ser representado por um objeto. O nome e o número
do usuário devem ser propriedades deste objeto. */

let rs = require("readline-sync")

let lista = []

let usuario1 = rs.question("Por favor, digite seu nome: \n")
let numero1 = rs.questionInt(`${usuario1} digite um número: \n`)

let user1 = {
    Nome: usuario1,
    Numero: numero1,
}

lista.push(user1)


let usuario2 = rs.question("Por favor, digite seu nome: \n")
let numero2 = rs.questionInt(`${usuario2} digite um número: \n`)

let user2 = {
    Nome: usuario2,
    Numero: numero2,
}

lista.push(user2)

let usuarioComMaiorNumero
let mensagem 

usuarioComMaiorNumero = user1.Numero > user2.Numero ? user1 : user2

mensagem = `O maior número foi o de ${usuarioComMaiorNumero.Nome}: ${usuarioComMaiorNumero.Numero}`


let resultado = {
    MaiorNumero: mensagem,
}

lista.push(resultado)

console.log(lista)

