/*2. (OBRIGATÓRIO) Crie um programa que:
a. Peça o nome de 1 usuário;
b. Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990);
c. Com base na data de nascimento, calcule sua idade (a data de hoje você
mesmo pode definir em uma variável);
d. Imprima na tela a idade do usuário.
e. Pare a execução.
*/

let rs = require('readline-sync')

let usuario = rs.question('Qual o seu nome? ')
let dataNiver = rs.question('Qual a sua data de nascimento? DD/MM/AAAA: ')

let anoAtual = 2020
let mesAtual = 07
let diaAtual = 09

let dataNascimento = dataNiver.split('/') [2]
let diaNascimento = dataNiver.split('/') [0]
let mesNascimento = dataNiver.split('/') [1]

let idade = anoAtual - dataNascimento

if(mesAtual < mesNascimento || diaAtual < diaNascimento) {
    idade = idade -1
}

let User = {
    nome: usuario,
    nascimento: dataNiver,
    idade:idade
}

console.log(User)