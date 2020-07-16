const readline = require('readline-sync');

let nome = readline.question('Digite seu nome: ');
let dia = readline.questionInt('Digite o dia do seu nascimento: ');
let mes = readline.questionInt('Digite o mes do seu nascimento: ');
let ano = readline.questionInt('Digite o ano do seu nascimento: ');


const inf = (nome, dia, mes, ano) => {
    const idade = 2020 - ano;
    return(`${idade} anos`)
}
 
console.log(`Nome: ${nome} | Data de Nascimento: ${dia}/${mes}/${ano}`);
console.log(`Idade: ${inf(nome, dia, mes, ano)}`);