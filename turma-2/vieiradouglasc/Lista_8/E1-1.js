// Crie um programa que:
// a. Peça o nome de 2 usuários;
// b. Para cada usuário, peça 1 número;
// c. Imprima na tela qual usuário digitou o maior número.
// d. Pare a execução.
// Neste exercício, cada usuário deve ser representado por um objeto. O nome e o número
// do usuário devem ser propriedades deste objeto.

let readlineSync = require('readline-sync')

let usuario1 = {
    nome: readlineSync.question("Digite seu nome: "),
    num: readlineSync.questionInt('Digite um número: ')
}
console.clear()

let usuario2 = {
    nome: readlineSync.question("Digite seu nome: "),
    num: readlineSync.questionInt('Digite um número: ')
}
console.clear()

if (usuario1.num > usuario2.num) {
    console.log(`${usuario1.nome}, seu número é maior.`)
} else if (usuario1.num === usuario2.num) {
    console.log('Os números são iguais.')
} else {
    console.log(`${usuario2.nome}, seu número é maior.`)
}
