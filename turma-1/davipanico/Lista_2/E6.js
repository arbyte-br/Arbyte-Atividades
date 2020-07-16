/* Elabore um algoritmo que calcule o que deve ser pago por um produto,
solicitando o preço da etiqueta do produto e a escolha da condição de
pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de
pagamento escolhida e efetuar o cálculo adequado. Código Condição de
pagamento
- 1 À vista em dinheiro ou cheque, recebe 10% de desconto
- 2 À vista no cartão de crédito, recebe 15% de desconto
- 3 Em duas vezes, preço normal de etiqueta sem juros
- 4 Em duas vezes, preço normal de etiqueta mais juros de 10% */ 

// Variável onde chamamos o 'readline-sync'.
var readline = require('readline-sync')

// Variável onde perguntamos o preço do produto ao usuário.
var valorProduto = readline.questionInt('Qual o valor de etiqueta do produto? ')

// Variável onde perguntamos a forma de pagamento ao usuário.
// Aqui vamos usar os números 1,2,3 e 4 como referência as formas de pagamento. (Lembrando que o \n é para dar pular para a próxima linha no console).
var formaDePagamento = readline.question('Qual a forma de pagamento que você deseja pagar?\n1 - Para A vista em dinheiro ou cheque\n2 - Para A vista no cartão de crédito\n3 - Para Duas vezes no cartão de crédito\n4 - Para mais de Três vezes no cartão de crédito.')

// Condição, se a variável 'formaDePagamento' for igual (==) a 1, vamos seguir da seguinte forma:
// Criamos a variável 'desconto' onde vamos pegar o número 10 e dividir (/) pela variável 'valorProduto' e depois multiplicar (*) por 100, assim temos armazenado na variável 'desconto' 10% da variável 'valorProduto'.
// Por último vamos imprimir 'O preço do produto é R$' e, a variável 'valorProduto' menos (-) a variável 'desconto'.
if(formaDePagamento == 1) {
    var desconto = (10 / valorProduto) * 100
    console.log('O preço do produto é de R$', valorProduto - desconto, 'com 10% de desconto!')
}
// Caso a condição de IF não seja atendida, vamos para o primeiro else if.
// Condição, se a variável 'formaDePagamento' for igual (==) a 2 vamos seguir da seguinte forma:
// Seguimos a mesma lógica de cima e criamos a variável 'desconto' só que mudamos o valor de 10 para 15, pois queremos agora o valor de 15%.
// Por último, imprimimos no console: 'O preço do produto é de R$' e, a variável 'valorProduto' menos (-) a variável 'desconto'.
else if(formaDePagamento == 2) {
    var desconto = (15 / valorProduto) * 100
    console.log('O preço do produto é de R$', valorProduto - desconto, 'com 15% de desconto!')
}
// Caso a condição de else if não seja atendida, vamos para o segundo else if.
// Condição, se a variável 'formaDePagamento' for igual (==) a 3 vamos seguir da seguinte forma:
// Como na forma de pagamento 3 o valor do produto permanece o mesmo vamos imprimir apenas ele e informar em quantas parcelas:
// 'O preço do produto é de R$' e, a variável valorProduto, 'em duas vezes sem juros de R$' e, novamente a variável 'valorProduto' só que agora dividida (/) por 2.
else if(formaDePagamento == 3) {
    console.log('O preço do produto é de R$', valorProduto, 'em duas vezes sem juros de R$', valorProduto / 2)
}
// Caso nenhuma das condições acima forem atendidas, vamos para o else e vamos seguir da seguinte forma:
// Criamos a variável 'juros' que segue a mesma lógica da variável 'desconto' para descobrir quanto é 10% da variável 'valorProduto'
// Depois vamos imprimir: 'O preço do produto é de R$' e, a variável 'valorProduto' mais (+) a variável de 'juros'.
else {
    var juros = (10 / valorProduto) * 100
    console.log('O preço do produto é de R$', valorProduto + juros, 'com 10% de juros no cartão de crédito')
}