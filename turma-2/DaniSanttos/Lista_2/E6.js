let rs = require('readline-sync')

let valorDoProduto = rs.questionFloat('Qual o valor do produto? ')
console.log('\nMeios de pagamento: Para pagamentos em dinheiro você ganha 10% de desconto, no crédito à vista você ganha 15%. \nPagamentos em até 2 vezes no crédito não terá acrescimo de juros, mas acima de 2 vezes será acrescido um valor de 10% do total do produto\n.')
let metodoDePagamento = rs.questionInt('Qual a forma de pagamento?\nDigite 1 se for pagar no dinheiro.\nDigite 2 se for pagar no crédito à vista.\nSe deseja parcelar em 2 vezes digite 3.\nPara 3 ou mais parcelas digite 4.\n')

if(metodoDePagamento === 1){
    valorDoDesconto = valorDoProduto / 10
    valorDoProdutoFinal = valorDoProduto - valorDoDesconto
    console.log(`Parabéns, com o seu pagamento à vista no dinheiro você ganhou um desconto de 10% no valor de R$${valorDoDesconto.toFixed(2)} e seu produto sairá no valor de R$${valorDoProdutoFinal.toFixed(2)}`)
}else if(metodoDePagamento === 2){
    valorDoDesconto1 = valorDoProduto / 20
    valorDoDesconto = valorDoDesconto1 * 3
    valorDoProdutoFinal = valorDoProduto - valorDoDesconto
    console.log(`Parabéns, com o seu pagamento à vista no crédito você ganhou um desconto de 15% no valor de R$${valorDoDesconto.toFixed(2)} e seu produto sairá no valor de R$${valorDoProdutoFinal.toFixed(2)}`)
}else if (metodoDePagamento === 3){
    valorDasParcelas = valorDoProduto / 2
    console.log(`Seu produto será parcelado em 2 vezes (sem acrescimo) com o valor R$${valorDasParcelas.toFixed(2)} cada parcela.`)
}else if(metodoDePagamento === 4){
    let parcelas = rs.questionInt('Em quantas vezes você deseja parcelar? ')
    if(parcelas >= 3){
        acrescimo = valorDoProduto / 10
        valorDoProduto = valorDoProduto + acrescimo
        valorDasParcelas = valorDoProduto / parcelas
        console.log(`O seu produto terá um acrescimo de R$${acrescimo.toFixed(2)} que corresponde à 10% do valor do produto. As parcelas sairão no valor de R$${valorDasParcelas.toFixed(2)}`)
    }else{
        console.log('Opção inválida.')
    }
    
}else{
    console.log('Opção inválida.')
}