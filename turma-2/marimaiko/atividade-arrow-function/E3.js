// Desenvolva uma arrow function que receba quatro parâmetros, sendo NOME, DIA, MÊS e ANO DE NASCIMENTO e retorne a idade da pessoa, imprimindo na tela o Nome informado, a data de seu nascimento e a idade calculada dentro da arrow function

let ageCalculator = require('age-calculator');
let {AgeFromDateString, AgeFromDate} = require('age-calculator');
let rs = require('readline-sync');

let dados ={}
 dados.nome = rs.question('Insira o seu nome: '),
 dados.dia = rs.question('Insira o dia do seu nascimento: '),
 dados.mes = rs.question('Insira o mes do seu nascimento: '),
 dados.ano = rs.question('Insira o ano do seu nascimento: ')


const idade = (nome, dia, mes, ano) =>
{
    let ageFromDate = new AgeFromDate(new Date(ano,mes,dia)).age;
    console.log(`${nome}, nascido na data ${dia}/${mes}/${ano} tem ${ageFromDate} anos` );
    return ageFromDate
}

console.log(idade(dados.nome, dados.dia, dados.mes, dados.ano));
