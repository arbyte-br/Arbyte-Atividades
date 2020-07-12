/*Crie um programa que:
a. Peça o nome de 2 usuários;
b. Para cada usuário, peça 3 números;
c. Imprima na tela qual usuário digitou o maior entre todos os números.
d. Pare a execução.
Neste exercício, cada usuário deve ser representado por um objeto. O nome e os
números do usuário devem ser propriedades deste objeto.*/

let rs = require(`readline-sync`)
let primeiroUsuario = {}
let segundoUsuario = {}
primeiroUsuario.nome = rs.question(`Qual o nome do primeiro usuario?\n`)
console.clear()
segundoUsuario.nome = rs.question(`Qual o nome do segundo usuario?\n`)
console.clear()
primeiroUsuario.primeiroNumero = rs.questionInt(`Digite um numero ${primeiroUsuario.nome} >`)
primeiroUsuario.segundoNumero = rs.questionInt(`Digite um numero ${primeiroUsuario.nome} >`)
primeiroUsuario.terceiroNumero = rs.questionInt(`Digite um numero ${primeiroUsuario.nome} >`)
console.clear()
segundoUsuario.primeiroNumero = rs.questionInt(`Digite um numero ${segundoUsuario.nome} >`)
segundoUsuario.segundoNumero = rs.questionInt(`Digite um numero ${segundoUsuario.nome} >`)
segundoUsuario.terceiroNumero = rs.questionInt(`Digite um numero ${segundoUsuario.nome} >`)
console.clear()
let maiorDoPrimeiro = Math.max(primeiroUsuario.primeiroNumero,primeiroUsuario.segundoNumero,primeiroUsuario.terceiroNumero)
let maiorDoSegundo = Math.max(segundoUsuario.primeiroNumero,segundoUsuario.segundoNumero,segundoUsuario.terceiroNumero )

maiorDoPrimeiro > maiorDoSegundo 
? console.log(`O maior numero foi de ${primeiroUsuario.nome}`)
: console.log(`O maior numero foi de ${segundoUsuario.nome}`)

