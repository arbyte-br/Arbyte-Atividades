let rs = require("readline-sync")

let lista = []

let usuario1 = rs.question("Usuario 1, digite seu nome: ")
let numero1 = rs.questionInt(`${usuario1} digite um numero: `)

let user1 = {
    Nome: usuario1,
    Numero: numero1,
}

lista.push(user1)


let usuario2 = rs.question("Usuario 2, digite seu nome: ")
let numero2 = rs.questionInt(`${usuario2} digite um numero: `)

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

