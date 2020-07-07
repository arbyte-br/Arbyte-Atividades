/*Faça um programa que calcule e imprima o valor em reais de cada kw, o valor
em reais a ser pago, o novo valor a ser pago por essa residência com um
desconto de 10%. Dado: 100 kilowatts custa 1/7 do salario minimo. Quantidade
de kw gasto por residência.*/

let rs = require(`readline-sync`)
let conta = rs.question(`Quantos kw vieram na sua conta?\n`)
let kw = (1039/7)/100
let valorConta = kw * conta
let descontoConta = valorConta * 0.9

console.log(`O valor da conta é R$${valorConta.toFixed(2)}, sendo que cada kw custa R$${kw.toFixed(2)}
e caso seja paga antes do vencimento, fornecemos um desconto especial 
e ela saira por R$${descontoConta.toFixed(2)}`)
//exercicio não precisou de um if 