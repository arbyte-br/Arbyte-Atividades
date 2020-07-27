/* (OBRIGATÓRIO) Crie um programa que:
a. Peça o nome de 2 usuários;
b. Peça a data de nascimento dos 2 usuários (formato DD/MM/AAAA);
c. Com base nas datas de nascimento, calcule suas idades;
d. Imprima na tela a idade de cada usuário;
e. Imprima na tela qual é o usuário mais velho e qual o mais novo.
f. Pare a execução.
Neste exercício, cada usuário deve ser representado por um objeto. O nome, a data de
nascimento e a sua idade devem ser propriedades deste objeto.
 */
let rs = require("readline-sync")
let user1 = {
    nome: rs.question('Digite o nome do primeiro usuário: \n'),
    dataNasc: rs.question('Qual sua data de nascimento? (DD/MM/AAAA): ').split('/'),
    idade: 0,
}
let user2 = {
    nome: rs.question('Digite o nome do segundo usuário: \n'),
    dataNasc: rs.question('Qual sua data de nascimento? (DD/MM/AAAA): ').split('/'),
    idade: 0,
}
let diaUser1 = parseInt(user1.dataNasc[0])
let mesUser1 = parseInt(user1.dataNasc[1])
let anoUser1 = parseInt(user1.dataNasc[2])

let diaUser2 = parseInt(user2.dataNasc[0])
let mesUser2 = parseInt(user2.dataNasc[1])
let anoUser2 = parseInt(user2.dataNasc[2])

let diaAtual = 09
let mesAtual = 07
let anoAtual = 2020

let idadeUser1 = (anoAtual - anoUser1)
let idadeUser2 = (anoAtual - anoUser2)

if((diaUser1 > 0 && diaUser1 < 32) && (mesUser1 > 0 && mesUser1 < 13) && (anoUser1 > 1900 && anoUser1 < 2021)){
    if((mesAtual === mesUser1 && diaAtual < diaUser1) || (mesAtual < mesUser1)){
        idadeUser1 = idadeUser1 - 1
        user1.idade = idadeUser1
        console.log(user1)
    }else{
        user1.idade = idadeUser1
        console.log(user1)
    }
}else{
    console.log(`A data inserida por ${user1.nome} é inválida.`)
}

if((diaUser2 > 0 && diaUser2 < 32) && (mesUser2 > 0 && mesUser2 < 13) && (anoUser2 > 1900 && anoUser2 < 2021)){
    if((mesAtual === mesUser2 && diaAtual < diaUser2) || (mesAtual < mesUser2)){
        idadeUser2 = idadeUser2 - 1
        user2.idade = idadeUser2
        console.log(user2)
    }else{
        user2.idade = idadeUser2
        console.log(user2)
    }
}else{
    console.log(`A data inserida por ${user2.nome} é inválida.`)
}

if (user1.idade > user2.idade){
console.log(`${user1.nome} é mais velho que ${user2.nome}.`)
}else if (user1.idade < user2.idade){
    console.log(`${user2.nome} é mais velho que ${user1.nome}.`)
}