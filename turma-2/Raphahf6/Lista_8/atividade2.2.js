// (OBRIGATÓRIO) Crie um programa que:
// a. Peça o nome de 1 usuário;
// b. Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990);
// c. Com base na data de nascimento, calcule sua idade (a data de hoje você
// mesmo pode definir em uma variável);
// d. Imprima na tela a idade do usuário.
// e. Pare a execução.

let rs = require('readline-sync')

let userName = rs.question('Digite um nome: ')
let diaNascimento = rs.questionInt('Digite o dia do seu nascimento: ')
let mesNascimento = rs.questionInt('Digite o numero do mês do seu nascimento: ')
let anoNascimento = rs.questionInt('Digite o ano do seu nascimento: ')

let anoAtual = 2020
let mesAtual = 07
let dataNascimento = `${diaNascimento}/${mesNascimento}/${anoNascimento}`

let idade = anoAtual - anoNascimento

if(mesAtual < mesNascimento){
    idade = idade -1
}


let user = {
    nome : userName,
    nascimento: dataNascimento,
    idade : idade
}

console.log(user)