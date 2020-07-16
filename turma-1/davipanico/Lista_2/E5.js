/* Faça um programa que calcule e imprima o valor em reais de cada kw, o valor
em reais a ser pago o novo valor a ser pago por essa residência com um
desconto de 10%. Dado: 100 kilowatts custa 1/7 do salario minimo. quantidade
de kw gasto por residência. */

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde definimos o salário minimo.
var salarioMin = 1039
//Variável onde fazemos o cálculo de quanto custa cada Kilowatts, para isso usamos a seguinte fórmula:
// Pegamos o valor da variável 'salarioMin' e dividimos (/) por 7, assim sabemos quanto custa cada 100 Kilowatts, apos isso,
// pegamos o resultado e dividimos (/) por 100, assim sabemos quanto cada unidade de Kilowatts vale. Por fim esse valor será armazenado na variável 'kwValow'.
var kwValor = ((salarioMin / 7) / 100).toFixed(2)
// Aqui imprimimos no console o valor de cada Kilowatts para o usuário.
console.log('O valor de cada Kilowatts é de R$', kwValor)

// Variável onde perguntamos ao usuário quantos Kilowatts foram gastos.
var quantidade = readline.questionInt('Quantos Kilowatts foram gastos? ')
// Variável onde perguntamos ao usuário se ele deseja ver o valor com desconto ou não.
// Ao final usamos a função nativa do JavaScript chamada 'toLowerCase()', essa função pega o valor da variável e transforma tudo em caixa baixa.
var pergunta = readline.question('Deseja ver o valor com desconto? S/N ').toLowerCase()

// Condição, se a variável pergunta for igual (==) a 's' (Lembra que transformamos a resposta do usuário em caixa baixa? usamos então a condição como caixa baixa), se sim:
// Criamos uma variável chamada 'desconto' nela fazemos o cálculo de quanto é o valor de 10% de desconto, para isso pegamos a quantidade de kilowatts gastos e multiplicamos (*) pela variável 'kwValor'
// depois dividimos o resultado por 10, assim temos o valor de 10% da quantidade de killowatts gastos, logo após vamos imprimir:
// 'O valor a ser pago por essa residência com 10% de desconto é de R$ ' e, a variável quantidade multiplicada (*) pela variável 'kwValor' menos (-) a variável 'desconto'.
if (pergunta == 's') {
    var desconto = (quantidade * kwValor) / 10
    console.log('O valor a ser pago por essa residência com 10% de desconto é de R$', (quantidade * kwValor) - desconto)
}
// Caso a condição if não seja atendida, vamos para else, aqui vamos imprimir o valor sem desconto.
// 'O valor a ser pago por essa residência é de R$' e, a variável quantidade multiplicada (*) pela variável 'kwValor'.
else {
    console.log('O valor a ser pago por essa residência é de R$', quantidade * kwValor )
}



