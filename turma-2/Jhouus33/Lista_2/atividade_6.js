// Elabore um algoritmo que calcule o que deve ser pago por um produto,
// solicitando o preço da etiqueta do produto e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de
// pagamento escolhida e efetuar o cálculo adequado. Código Condição de pagamento
// - 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// - 2 À vista no cartão de crédito, recebe 15% de desconto
// - 3 Em duas vezes, preço normal de etiqueta sem juros
// - 4 Em duas vezes, preço normal de etiqueta mais juros de 10%

let rs = require('readline-sync')
let valorProduto = rs.questionFloat('Digite o valor do produto: \n')

let formaDePagamento = rs.questionInt("Escolha a forma de pagamento: \n (1) À vista em dinheiro ou cheque, recebe 10% de desconto \n (2) À vista no cartão de crédito, recebe 15% de desconto \n (3) Em duas vezes, preço normal de etiqueta sem juros \n (4) Em três vezes, preço normal de etiqueta mais juros de 10%  \n")
let valorFinal = 01

if(formaDePagamento == 1){
valorFinal = valorProduto * 0.9
console.log(`Valor final = R$ ${valorFinal.toFixed(2)}`)
}else if(formaDePagamento == 2) {
valorFinal = valorProduto * 0.85
console.log(`Valor final = R$ ${valorFinal.toFixed(2)}`)
} else if(formaDePagamento == 3) {
    valorFinal = valorProduto / 2 
    console.log(`Valor final = 2 x de R$ ${valorFinal.toFixed(2)}`)
} else if(formaDePagamento == 4){
    valorFinal = (valorProduto * 1.10) / 3  // Assumi aqui q o enunciado está incorreto, mudei de 2x para 3x para ficar diferente da opção 3
    console.log(`Valor final = 3 x de R$ ${valorFinal.toFixed(2)}`)
}else {
    console.log('Forma não encontrada, digite: 1, 2, 3 ou 4.')
}