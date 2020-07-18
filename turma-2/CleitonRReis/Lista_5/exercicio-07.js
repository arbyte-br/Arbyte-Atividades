/*
7. Escreva um programa que apresente quatro opções:
(a) consulta saldo, (b) saque e (c) depósito e (d) sair.
O saldo deve iniciar em R$ 0,00.
A cada saque ou depósito o valor do saldo deve ser atualizado.
*/

var rs = require('readline-sync');

var saldo = 0.00;
var deposito;
var saque;

var pergunta = ''; 

while(pergunta != "D"){
     
    pergunta = rs.question('Digite "A" para ver o saldo, "B" para saque, "C" para efetuar um depósito ou "D" para sair: ').toUpperCase();

if(pergunta == "A"){
        console.log(`Seu saldo é: ${saldo}`);
    }if(pergunta == "B"){
        saque = rs.question(`Informe o valor do saque: `); 
        
        saldo = saldo - saque;

        console.log(`Seu saldo é: ${saldo}`);

    }if(pergunta == "C"){
        deposito = rs.questionFloat(`Informe o valor do depósito: `);
        
        saldo = deposito + saldo;

        console.log(`Saldo atual é: ${saldo}`);
    }

}
console.log(`Obrigado! Até mais!`);