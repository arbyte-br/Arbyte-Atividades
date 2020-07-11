/* 
(OBRIGATÓRIO) Crie um programa que:
a. Peça o nome de 1 usuário;
b. Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990);
c. Com base na data de nascimento, calcule sua idade (a data de hoje você
mesmo pode definir em uma variável);
d. Imprima na tela a idade do usuário.
e. Pare a execução.
Neste exercício, o usuário deve ser representado por um objeto. O nome, a data de
nascimento e a sua idade devem ser propriedades deste objeto.
 */


let rs = require('readline-sync')

let nome = rs.question('Qual o seu nome? ')
let ano_atual = new Date().getFullYear();
let ano_niver = rs.question('Digite a sua data de nascimento: ' )
let ano_inf = ano_niver.split('/')[2];
let idade = (ano_atual - ano_inf)

user = {
    nome: nome, idade: idade 
}


console.log(user) 
