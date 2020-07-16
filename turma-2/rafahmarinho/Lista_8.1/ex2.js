// (OBRIGATÓRIO) Crie um programa que:
// a. Peça o nome de 1 usuário;
// b. Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990);
// c. Com base na data de nascimento, calcule sua idade (a data de hoje você
// mesmo pode definir em uma variável);
// d. Imprima na tela a idade do usuário.
// e. Pare a execução.
// Neste exercício, o usuário deve ser representado por um objeto. O nome, a data de
// nascimento e a sua idade devem ser propriedades deste objeto.
let rs = require('readline-sync')

let user = {
    nome: rs.question('Digite seu nome: \n'),
    dataNasc: rs.question('Qual sua data de nascimento? (DD/MM/AAAA): ').split('/'),
    idade: '0',
}
let diaUser = parseInt(user.dataNasc[0])
let mesUser = parseInt(user.dataNasc[1])
let anoUser = parseInt(user.dataNasc[2])

let diaAtual = 09
let mesAtual = 07
let anoAtual = 2020

let idadeUser = (anoAtual - anoUser)


if((diaUser > 0 && diaUser < 32) && (mesUser > 0 && mesUser < 13) && (anoUser > 1900 && anoUser < 2021)){
    if((mesAtual === mesUser && diaAtual < diaUser) || (mesAtual < mesUser)){
        idadeUser = idadeUser - 1
        user.idade = idadeUser
        console.log(user)
    }else{
        user.idade = idadeUser
        console.log(user)
    }
}else{
    console.log('A data inserida é inválida.')
}




