/*Elabore um algoritmo que calcule o que deve ser pago por um produto,
solicitando o preço da etiqueta do produto e a escolha da condição de
pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de
pagamento escolhida e efetuar o cálculo adequado. Código Condição de
pagamento
- 1 À vista em dinheiro ou cheque, recebe 10% de desconto
- 2 À vista no cartão de crédito, recebe 15% de desconto
- 3 Em duas vezes, preço normal de etiqueta sem juros
- 4 Em três vezes, preço normal de etiqueta mais juros de 10%*/

let rs = require(`readline-sync`)
let preco = rs.questionFloat(`Digite o valor do produto> `)
let formaPagamento = rs.question(`Informe a forma de pagamento> `)
let parcelamento = rs.question(`Caso va parcelar no cartao, informe quantas vezes ou informe 1 para avista> `)

if(formaPagamento == "dinheiro" ||formaPagamento == "cheque" ){
    preco = preco * 0.9
    console.log(`Total R$${preco.toFixed(2)}`)
}else if(formaPagamento == "cartao de credito" && parcelamento == "1"){
    preco = preco * 0.85
    console.log(`Total R$${preco.toFixed(2)}`)
}else if(formaPagamento == "cartao de credito" && parcelamento == "2"){
    preco = preco 
    console.log(`Total R$${preco.toFixed(2)}`)
}else if(formaPagamento == "cartao de credito" && parcelamento == "3"){
    preco = preco * 1.1
    console.log(`Total R$${preco.toFixed(2)}`)
}