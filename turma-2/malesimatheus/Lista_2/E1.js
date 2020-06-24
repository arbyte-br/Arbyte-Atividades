let rs = require('readline-sync');

let moeda100 = Number(rs.question('Quantas moedas de 1 real? '));
let moeda50 = Number(rs.question('Quantas moedas de 50 centavos? '));
let moeda25 = Number(rs.question('Quantas moedas de 25 centavos? '));
let moeda10 = Number(rs.question('Quantas moedas de 10 centavos? '));
let moeda5 = Number(rs.question('Quantas moedas de 5 centavos? '));
let moeda1 = Number(rs.question('Quantas moedas de 1 centavo? '));

let valor100 = moeda100 * 1;
let valor50 = moeda50 * 0.50;
let valor25 = moeda25 * 0.25;
let valor10 = moeda10 * 0.10;
let valor5 = moeda5 * 0.05;
let valor1 = moeda1 * 0.01;

let preco = Number(rs.question('Qual o preco do produto? '));

let valorCofrinho = valor1 + valor5 + valor10 + valor25 + valor50 + valor100;

console.log('Voce tem ' + valorCofrinho + ' reais');

if (valorCofrinho >= preco) {
    console.log('Voce pode comprar');
} else {
    console.log('O valor nao e suficiente');
}