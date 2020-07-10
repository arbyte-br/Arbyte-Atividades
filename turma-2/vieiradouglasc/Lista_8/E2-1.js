// Crie um programa que:
// a. Peça o nome de 1 usuário;
// b. Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990);
// c. Com base na data de nascimento, calcule sua idade (a data de hoje você
// mesmo pode definir em uma variável);
// d. Imprima na tela a idade do usuário.
// e. Pare a execução.

let readlineSync = require('readline-sync')

let diaAtual = 09
let mesAtual = 05
let anoAtual = 2020

let dadosUser = {
    nome: readlineSync.question('Digite seu nome: '),
    nasc: readlineSync.question('Digite sua data de aniversário (Ex: DD/MM/AAAA): ').split('/'),
    idade: 0
}

let diaUser = parseInt(dadosUser.nasc[0])
let mesUser = parseInt(dadosUser.nasc[1])
let anoUser = parseInt(dadosUser.nasc[2])

let idadeUser = (anoAtual - anoUser)
if ((mesAtual === mesUser && diaAtual < diaUser) || (mesAtual < mesUser)) {
    idadeUser = idadeUser -1
}
dadosUser.idade = idadeUser

console.log(dadosUser)


