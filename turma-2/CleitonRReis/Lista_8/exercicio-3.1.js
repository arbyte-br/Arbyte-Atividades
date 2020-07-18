/*
3.(OBRIGATÓRIO)Crieumprogramaque:

a.Peça o nome de 2 usuários;
b.Peça a data de nascimento dos 2 usuários (formato DD/MM/AAAA);
c.Com base nas datas de nascimento, calcule suas idades;
d.Imprima na tela a idade de cada usuário;
e.Imprima na tela qual é o usuário mais velho e qual o mais novo;
f.Pare a execução. Neste exercício, cada usuário deve ser representado por um objeto. 

O nome, a data denascimento e a sua idade devem ser propriedades deste objeto.
*/

const rs = require('readline-sync');

let usuario1 = rs.question('Informe seu nome: ');
let dataDeNascimento1 = rs.question('Informe sua data de nascimento: ');

let usuario2 = rs.question('Informe seu nome: ');
let dataDeNascimento2 = rs.question('Informe sua data de nascimento: ');

let novaData1 = dataDeNascimento1.split('/');

let novaData2 = dataDeNascimento2.split('/');

let anoAtual = [09, 07, 2020];

let subtracao1 = 0;
let subtracao2 = 0;

let dadosDoUsuario = {};

if (novaData1[0] > 9 && novaData1[1] >= 7 && novaData1[2] < novaData2[2]) {

    subtracao1 = (anoAtual[2] - novaData1[2]) - 1;
    subtracao2 = (anoAtual[2] - novaData2[2]);

    dadosDoUsuario.nome1 = usuario1;
    dadosDoUsuario.nome2 = usuario2
    dadosDoUsuario.data1 = dataDeNascimento1;
    dadosDoUsuario.data2 = dataDeNascimento2;
    dadosDoUsuario.conta1 = subtracao1;
    dadosDoUsuario.conta2 = subtracao2;

    console.log(`${usuario1}, sua idade é: ${dadosDoUsuario.conta1}. Você é mais velho que o(a) usuário(a) 2 - ${usuario2}, ${dadosDoUsuario.conta2} anos.`);

} else if (novaData1[2] < novaData2[2]) {

    subtracao1 = (anoAtual[2] - novaData1[2]);
    subtracao2 = (anoAtual[2] - novaData2[2]);

    dadosDoUsuario.nome1 = usuario1;
    dadosDoUsuario.nome2 = usuario2
    dadosDoUsuario.data1 = dataDeNascimento1;
    dadosDoUsuario.data2 = dataDeNascimento2;
    dadosDoUsuario.conta1 = subtracao1;
    dadosDoUsuario.conta2 = subtracao2;

    console.log(`${usuario1}, sua idade é: ${dadosDoUsuario.conta1}. Você é mais velho que o(a) usuário(a) 2 - ${usuario2}, ${dadosDoUsuario.conta2} anos.`);

} else if (novaData2[0] > 9 && novaData2[1] >= 7 && novaData2[2] < novaData1[2]) {

    subtracao1 = (anoAtual[2] - novaData2[2]) - 1;
    subtracao2 = (anoAtual[2] - novaData1[2]);

    dadosDoUsuario.nome1 = usuario1;
    dadosDoUsuario.nome2 = usuario2
    dadosDoUsuario.data1 = dataDeNascimento1;
    dadosDoUsuario.data2 = dataDeNascimento2;
    dadosDoUsuario.conta1 = subtracao1;
    dadosDoUsuario.conta2 = subtracao2;

    console.log(`${usuario2}, sua idade é: ${dadosDoUsuario.conta1}. Vc é mais velho(a) que o(a) usuário(a) 1 - ${usuario1}, ${dadosDoUsuario.conta2} anos.`);

} else if (novaData2[2] < novaData1[2]) {

    subtracao1 = (anoAtual[2] - novaData2[2]);
    subtracao2 = (anoAtual[2] - novaData1[2]);

    dadosDoUsuario.nome1 = usuario1;
    dadosDoUsuario.nome2 = usuario2
    dadosDoUsuario.data1 = dataDeNascimento1;
    dadosDoUsuario.data2 = dataDeNascimento2;
    dadosDoUsuario.conta1 = subtracao1;
    dadosDoUsuario.conta2 = subtracao2;

    console.log(`${usuario2}, sua idade é: ${dadosDoUsuario.conta1}. Vc é mais velho(a) que o(a) usuário(a) 1 - ${usuario1}, ${dadosDoUsuario.conta2} anos.`);

} else {

    subtracao1 = (anoAtual[2] - novaData2[2]);
    subtracao2 = (anoAtual[2] - novaData1[2]);

    dadosDoUsuario.nome1 = usuario1;
    dadosDoUsuario.nome2 = usuario2
    dadosDoUsuario.data1 = dataDeNascimento1;
    dadosDoUsuario.data2 = dataDeNascimento2;
    dadosDoUsuario.conta1 = subtracao1;
    dadosDoUsuario.conta2 = subtracao2;

    console.log(`Vocês dois têm a mesma idade: ${dadosDoUsuario.conta1} anos.`);

}

console.log(dadosDoUsuario)