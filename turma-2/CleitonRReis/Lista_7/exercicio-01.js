/*
1.(OBRIGATÓRIO) ​Faça uma função que recebe uma string com um nome e imprime aseguinte mensagem no console: 
"Olá <nome do usuário>, bem vindo!". Onde<nome_do_usuario> deve ser substituído pelo nome recebido pela função comoparâmetro. 
Ao executar o seu código, a mensagem deve ser exibida na tela. 
(Não énecessário pedir dados para o usuário, você pode definir os valores usados naaplicação aleatoriamente)
*/

const rs = require('readline-sync');

let nome = rs.question('Por favor, diga seu nome: ');

function imprimeNome(nome){
    return nome;
}

let res = imprimeNome(nome);

console.log(`Olá, ${res}! Seja bem vindo!`);