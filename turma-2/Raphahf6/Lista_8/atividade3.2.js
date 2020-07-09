// a. Peça o nome de 2 usuários;
// b. Peça a data de nascimento dos 2 usuários (formato DD/MM/AAAA);
// c. Com base nas datas de nascimento, calcule suas idades;
// d. Imprima na tela a idade de cada usuário;
// e. Imprima na tela qual é o usuário mais velho e qual o mais novo.
// f. Pare a execução.
// Neste exercício, cada usuário deve ser representado por um objeto. O nome, a data de
// nascimento e a sua idade devem ser propriedades deste objeto.

let rs = require('readline-sync')

let userName1 = rs.question('Digite um nome: ')
let userName2 = rs.question('Digite outro nome: ')

let diaNascimento1 = rs.questionInt(`${userName1} digite o dia do seu nascimento: `)
let mesNascimento1 = rs.questionInt(`${userName1} digite o mes do seu nascimento: `)
let anoNascimento1 = rs.questionInt(`${userName1} digite o ano do seu nascimento: `)

let diaNascimento2 = rs.questionInt(`${userName2} digite o dia do seu nascimento: `)
let mesNascimento2 = rs.questionInt(`${userName2} digite o mes do seu nascimento: `)
let anoNascimento2 = rs.questionInt(`${userName2} digite o ano do seu nascimento: `)

let anoAtual = 2020
let mesAtual = 07
let dataNascimento1 = [`${diaNascimento1}/${mesNascimento1}/${anoNascimento1}`]
let dataNascimento2 = [`${diaNascimento2}/${mesNascimento2}/${anoNascimento2}`]


let idade1 = anoAtual - anoNascimento1
let idade2 = anoAtual - anoNascimento2

let userMaisVelho = []


if (mesAtual < mesNascimento1) {
    idade1 = idade1 - 1
}

if (mesAtual < mesNascimento2) {
    idade2 = idade2 - 1
}


let user1 = {
    nome: userName1,
    nascimento: dataNascimento1,
    idade: idade1
}

let user2 = {
    nome: userName2,
    nascimento: dataNascimento2,
    idade: idade2
}

if (idade1 > idade2) {
    userMaisVelho = user1
} else {
    userMaisVelho = user2
}

console.log(user1)
console.log(user2)

console.log(`O usuario mais velho é o ${userMaisVelho.nome} com idade de ${userMaisVelho.idade} anos`)