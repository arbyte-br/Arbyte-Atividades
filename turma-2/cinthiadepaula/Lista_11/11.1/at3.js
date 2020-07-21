const rs = require('readline-sync');

let nome = rs.question('Digite seu nome: ');
let dia = rs.questionInt('Digite o dia do seu aniversario: ');
let mes = rs.questionInt('Digite o mes do seu aniversario: ');
let ano = rs.questionInt('Digite o ano do seu aniversario ');



const inf = (nome, dia, mes, ano) => {
    const idade = 2020 - ano;
    return(`${idade} anos`)
}
 
console.log(`Nome: ${nome} | Data de Nascimento: ${dia}/${mes}/${ano}`);
console.log(`Idade: ${inf(nome, dia, mes, ano)}`);
