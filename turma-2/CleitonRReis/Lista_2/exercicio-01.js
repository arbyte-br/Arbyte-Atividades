var rs = require('readline-sync');

var valor1 = 0;
var valor2 = 0;

console.log('Quer saber se você possui dinheiro suficiente para comprar X produto? Basta inserir os dados abaixo: ');

var produto = rs.question('Informe o nome do produto: ')
var valor1 = rs.questionFloat('Informe o valor que você tem disponível: ');
var valor2 = rs.questionFloat(`Informe o valor do(a) ${produto} que deseja comprar: `);

if(valor1 >= valor2){
    console.log(`Você tem dinheiro suficiente para adquirir o(a) ${produto}!`);
}else{
    console.log(`Você não tem o suficiente para adiquirir o(a) ${produto}!`)
}