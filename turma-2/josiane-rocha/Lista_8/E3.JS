/*3. (OBRIGATÓRIO) Crie um programa que:
a. Peça o nome de 2 usuários;
b. Peça a data de nascimento dos 2 usuários (formato DD/MM/AAAA);
c. Com base nas datas de nascimento, calcule suas idades;
d. Imprima na tela a idade de cada usuário;
e. Imprima na tela qual é o usuário mais velho e qual o mais novo.
f. Pare a execução.
Neste exercício, cada usuário deve ser representado por um objeto. O nome, a data de
nascimento e a sua idade devem ser propriedades deste objeto.
*/

let rs = require('readline-sync')

let User1 = rs.question(console.log('Digite um nome? '))
let dataNiver1 = rs.question('Qual a sua data de nascimento? DD/MM/AAAA: ')
let User2 = rs.question(console.log('Digite outro nome? '))
let dataNiver2 = rs.question('Qual a sua data de nascimento? DD/MM/AAAA: ')

let anoAtual = 2020
let mesAtual = 07
let diaAtual = 09

let dataNascimento = dataNiver1.split('/') [2]
let diaNascimento = dataNiver1.split('/') [0]
let mesNascimento = dataNiver1.split('/') [1]

let idade = anoAtual - dataNascimento

if(mesAtual < mesNascimento || diaAtual < diaNascimento) {
    idade = idade -1
}

let User = {
    nome: user1,
    nascimento: dataNiver1,
    idade:idade
}

console.log(User)

let dataNascimento = dataNiver2.split('/') [2]
let diaNascimento = dataNiver2.split('/') [0]
let mesNascimento = dataNiver2.split('/') [1]

let idade = anoAtual - dataNascimento

if(mesAtual < mesNascimento || diaAtual < diaNascimento) {
    idade = idade -1
}

let User = {
    nome: user2,
    nascimento: dataNiver2,
    idade:idade
}

console.log(User)

if (User1 + dataNiver1 >= 0) {
    console.log(User1)

} else {
    console.log(User2)
}