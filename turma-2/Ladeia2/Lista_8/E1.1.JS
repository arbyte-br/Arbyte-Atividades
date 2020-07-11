/* (OBRIGATÓRIO) Crie um programa que:
a. Peça o nome de 2 usuários;
b. Para cada usuário, peça 1 número;
c. Imprima na tela qual usuário digitou o maior número.
d. Pare a execução.
Neste exercício, cada usuário deve ser representado por um objeto. O nome e o número
do usuário devem ser propriedades deste objeto */

let rs = require('readline-sync')

    nome = rs.question('Qual é o seu nome? ')
    idade = rs.questionInt('qual é sua idade? ')
    nome1 = rs.question('Qual é o seu nome? ')
    idade1 = rs.questionInt('Qual é sua idade? ')

user1 = {
    nome: nome, idade: idade
}

user2 = {
    nome1: nome1, idade1: idade1
}

if (idade > idade1) {
    console.log(user1)
}else{
    console.log(user2)
}