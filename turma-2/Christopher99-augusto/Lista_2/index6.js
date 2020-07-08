let readline = require("readline-sync")

let valorProduto = readline.questionInt("Qual o valor que esta na etiqueta do produto ? ")

let formadepagamento = readline.question("Qual a forma de pagamento ?\n1 - Para A vista em dinheiro cheque ou cartão de débito\n2 - Para A vista no cartão de crédito\n3 - Para 2x no cartão de crédito\n4 - Para mais de 3x no cartão de crédito.")

if(formadepagamento == 1) {
    
    let desconto = (10 / valorProduto) * 100
    
    console.log("O valor do produto é de R$", valorProduto - desconto, "com 10% de desconto. ")
}
else if(formadepagamento == 2) {
    
    let desconto = (15 / valorProduto) * 100
    
    console.log("O valor do produto é de R$", valorProduto - desconto, "com 15% de desconto. ")
}
else if(formadepagamento == 3) {

    console.log("O valor do produto é de R$", valorProduto, "em 2x sem juros de R$", valorProduto / 2)
}
else {
    
    let juros = (10 / valorProduto) * 100
    
    console.log("O valor do produto é de R$", valorProduto + juros, "com 10% de juros no cartão de crédito")
}