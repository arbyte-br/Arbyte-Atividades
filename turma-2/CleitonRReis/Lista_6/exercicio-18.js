/*
1. Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no final
exiba o preço de cada produto junto com o valor total. após inserir todos os produtos o
programa deve pedir o valor a ser pago, caso o valor passe do da compra exibir o troco,
se o valor for menor informar que a compra vai ser cancelada.
EX entradas :
0.75
0.25
2.50
Valor total pago: 5.00
O programa imprime :
Produto 1 - 0.75
Produto 2 - 0.25
Produtos 3 - 2.50
Total da compra : 3.50 $
Troco : 1.50 $
*/

const rs = require('readline-sync');

var quantidadeProdutos = rs.questionInt('\nInforme o número de produtos adquiridos: ');

console.log('\n')

var vetor = [];

var valorProdutos = 0.00;

var saldo = 50;

var i = 0;

cont = 0;

var total = 0.00;

while(i < quantidadeProdutos){
    valorProdutos = rs.questionFloat(`Informe o valor do produto ${i+1}: `);
    vetor.push(valorProdutos);
    total = total +  valorProdutos;
    
    i++;
}

while(cont < vetor.length){
    
    console.log(`Valor do produto ${cont+1}: ${vetor[cont]}`);
    
    cont++;
}

console.log(`\nValor total a ser pago: ${total.toFixed(2)} reais.`);

if(saldo > total){      
    total = saldo - total;  
    console.log(`\nObrigado! Seu troco é: ${total.toFixed(2)} reais.\n`);
}else if(total > saldo){
    console.log(`\nVocê não possui valor suficiente para a compra!\n`);
}