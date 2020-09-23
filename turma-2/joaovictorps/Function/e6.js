const rs = require('readline-sync')

function calcularFechamento() {
    console.log('Calcular fechamento')

    let valorCartao = rs.questionFloat('Informe o valor total das transações com cartão: ')

    let valorCheque = rs.questionFloat('Informe o valor total das transações em cheque: ')

    let valorDinheiro = rs.questionFloat('Informe o valor total das transeções em dinheiro: ')

    valorCartao = cartao(valorCartao)
    valorCheque = cheque(valorCheque)

    console.log(`Valor total das transações com cartão: R$ ${valorCartao}`)
    console.log(`Valor total das transações com cheque: R$ ${valorCheque}`)
    console.log(`Valor total das transações com dinheiro: R$ ${valorDinheiro}`)

    return 'Valor total de fechamento: R$ ' + calcularTotal(valorCartao, valorCheque, valorDinheiro).toFixed(2)

}

function cartao(valor) {
    return valor+= (valor * 10 )/ 100
}

function cheque(valor) {
    return valor+= (valor * 5) / 100
}

function calcularTotal(cartao, cheque, dinheiro) {
    return cartao + cheque + dinheiro
}

console.log(calcularFechamento())