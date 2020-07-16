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



let rs = require('readline-sync')

let nome = rs.question('Qual o seu nome? ')
let ano_niver = rs.question('Digite a sua data de nascimento:  ')
let nome1 = rs.question('Qual é o seu nome?')
let ano_niver1 = rs.question('Digite a sua data de nascimento:  ')
let ano_atual = new Date().getFullYear();

let ano_inf = ano_niver.split('/')[2];
let ano_inf1 = ano_niver1.split('/')[2];

let idade = (ano_atual - ano_inf)
let idade1 = (ano_atual - ano_inf1)


user1 = {
    nome: nome, idade: idade 
}
user2 = {
    nome1: nome1, idade1: idade1
}

if (idade > idade1){
    console.log(user1)
}else{
    console.log(user2)
}
