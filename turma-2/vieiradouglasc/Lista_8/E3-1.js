// Crie um programa que:
// a. Peça o nome de 2 usuários;
// b. Peça a data de nascimento dos 2 usuários (formato DD/MM/AAAA);
// c. Com base nas datas de nascimento, calcule suas idades;
// d. Imprima na tela a idade de cada usuário;
// e. Imprima na tela qual é o usuário mais velho e qual o mais novo.
// f. Pare a execução.

let readlineSync = require('readline-sync')

let diaAtual = 09
let mesAtual = 07
let anoAtual = 2020

let dadosUser1 = {
    nome: readlineSync.question('Insira seu nome: '),
    nasc: readlineSync.question('Digite sua data de aniversário (Ex: DD/MM/AAAA): ').split('/'),
    idade: 0
}

let dadosUser2 = {
    nome: readlineSync.question('Insira seu nome: '),
    nasc: readlineSync.question('Digite sua data de aniversário (Ex: DD/MM/AAAA): ').split('/'),
    idade: 0
}

let diaUser1 = parseInt(dadosUser1.nasc[0])
let mesUser1 = parseInt(dadosUser1.nasc[1])
let anoUser1 = parseInt(dadosUser1.nasc[2])

let diaUser2 = parseInt(dadosUser2.nasc[0])
let mesUser2 = parseInt(dadosUser2.nasc[1])
let anoUser2 = parseInt(dadosUser2.nasc[2])

let idadeUser1 = (anoAtual - anoUser1)
if ((mesAtual === mesUser1 && diaAtual < diaUser1) || (mesAtual < mesUser1)) {
    idadeUser1 = idadeUser1 - 1
}
dadosUser1.idade = idadeUser1

let idadeUser2 = (anoAtual - anoUser2)
if ((mesAtual === mesUser2 && diaAtual < diaUser2) || (mesAtual < mesUser2)) {
    idadeUser2 = idadeUser2 - 1
}
dadosUser2.idade = idadeUser2

if (idadeUser1 > idadeUser2) {
    console.log(`O ${dadosUser1.nome} é mais velho`)
} else if (idadeUser1 === idadeUser2) {
    console.log(`${dadosUser1.nome} e ${dadosUser2.nome}, tem a mesma idade`)
} else {
    console.log(`O ${dadosUser2.nome} é mais velho`)
}