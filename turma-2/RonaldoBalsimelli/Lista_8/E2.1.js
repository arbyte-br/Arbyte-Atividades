/* (OBRIGATÓRIO) Crie um programa que:
a. Peça o nome de 1 usuário;
b. Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990);
c. Com base na data de nascimento, calcule sua idade (a data de hoje você
mesmo pode definir em uma variável);
d. Imprima na tela a idade do usuário.
e. Pare a execução.
Neste exercício, o usuário deve ser representado por um objeto. O nome, a data de
nascimento e a sua idade devem ser propriedades deste objeto. */

let rs = require("readline-sync")


let anoAtual = 2020
let nomeUsuario = rs.question("Digite seu nome: ")

let dia = rs.questionFloat("Digite seu dia de nascimento: ")
let mes = rs.questionFloat("Digite seu mes de nascimento: ")
let ano = rs.questionFloat("Digite seu ano de nascimento: ")

let dataNascimentoUsuario = `${dia}/${mes}/${ano}`
let resultado = anoAtual - ano
let dadosUsuario = {
    Nome: nomeUsuario,
    Nascimento: dataNascimentoUsuario,
    Idade: resultado + " anos"
}
console.log(dadosUsuario)




