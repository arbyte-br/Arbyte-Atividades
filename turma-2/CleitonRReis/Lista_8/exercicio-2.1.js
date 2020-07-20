/*
2.(OBRIGATÓRIO)
Crieumprogramaque:

a.Peça o nome de 1 usuário;
b.Peça a sua data de nascimento no formato DD/MM/AAAA (ex: 24/12/1990);
c.Com base na data de nascimento, calcule sua idade (a data de hoje você mesmo pode definir em uma variável);
d.Imprima na tela a idade do usuário;
e.Pare a execução. Neste exercício, o usuário deve ser representado por um objeto. 

O nome, a data de nascimento e a sua idade devem ser propriedades deste objeto.
*/

const rs = require('readline-sync');

let usuario = rs.question('Informe seu nome: ');

let dataDeNascimento = rs.question('Informe sua data de nacimento: ');

let novaData = dataDeNascimento.split('/');

let anoAtual = [09, 07, 2020];

let subtracao = 0;

let dadosDoUsuario = {};

if (novaData[0] > 9 && novaData[1] >= 7) {

    subtracao = (anoAtual[2] - novaData[2]) - 1;

    dadosDoUsuario.nome = usuario;
    dadosDoUsuario.data = dataDeNascimento;
    dadosDoUsuario.conta = subtracao;

    console.log(`Nome de usuário: ${dadosDoUsuario.nome}`);
    console.log(`${usuario}, sua data de nascimento é: ${dadosDoUsuario.data};`);
    console.log(`${usuario}, sua idade é: ${dadosDoUsuario.conta}.`);

} else {

    subtracao = (anoAtual[2] - novaData[2]);

    dadosDoUsuario.nome = usuario;
    dadosDoUsuario.data = dataDeNascimento;
    dadosDoUsuario.conta = subtracao;

    console.log(`Nome de usuário: ${dadosDoUsuario.nome}`);
    console.log(`${usuario}, sua data de nascimento é: ${dadosDoUsuario.data};`);
    console.log(`${usuario}, sua idade é: ${dadosDoUsuario.conta}.`);
}