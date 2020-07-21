const readline = require('readline-sync');
const fileSystem = require('fs');


const nome = readline.question('Insira seu nome completo ');
const nascimento = readline.question('Insira a Data de seu aniversario ');


const dados = {};
dados.nome = nome;
dados.nascimento = nascimento;

let arquivo = 'dados.json';
let transformaObjetoEmString = JSON.stringify(dados);

//console.log(transformaObjetoEmString)

fileSystem.writeFileSync(arquivo, transformaObjetoEmString)