// (OBRIGATÓRIO) Crie um programa que:
// a. Peça o nome de 1 usuário;
// b. Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990);
// c. Com base na data de nascimento, calcule sua idade (a data de hoje você
// mesmo pode definir em uma variável);
// d. Imprima na tela a idade do usuário.
// e. Pare a execução.

let rs = require('readline-sync')

let userName = rs.question('Digite um nome: ')
let dataCompleta = rs.question('Digite a data de nascimento no formato DD/MM/AAAA')

let anoAtual = 2020
let mesAtual = 07
let diaAtual = 09
let dataNascimento = dataCompleta.split('/')[2]
let diaNascimento = dataCompleta.split('/')[0]
let mesNascimento = dataCompleta.split('/')[1]

let idade = anoAtual - dataNascimento

if(mesAtual < mesNascimento || diaAtual < diaNascimento){
    idade = idade -1
}


let user = {
    nome : userName,
    nascimento: dataNascimento,
    idade : idade
}

console.log(user)