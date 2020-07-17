// 2. (OBRIGATÓRIO) Crie um programa que:
// a. Peça o nome de 1 usuário;
// b. Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990);
// c. Com base na data de nascimento, calcule sua idade (a data de hoje você
// mesmo pode definir em uma variável);
// d. Imprima na tela a idade do usuário.
// e. Pare a execução.
// Neste exercício, o usuário deve ser representado por um objeto. O nome, a data de
// nascimento e a sua idade devem ser propriedades deste objeto.

let rs = require('readline-sync')

let x={}
x.nomeUsuario = rs.question('Qual o seu nome?\n')
x.dataDeNascimento = new Date(rs.question("Qual sua data de nascimento? \n")) .getFullYear();
x.dataAtual = new Date () .getFullYear();
x.idade = x.dataAtual - x.dataDeNascimento
console.log(x.idade)
