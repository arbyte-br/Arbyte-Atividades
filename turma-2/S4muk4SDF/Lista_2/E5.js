let salarioMinimo = 1045
function valorKW(salarioMinimo) {
    let valorKW = (salarioMinimo/7)/100
    return valorKW
}
function valorConta(consumoEmKW, valorKW) {
    return consumoEmKW * valorKW
}
function valorContaComDesconto(valorConta, desconto) {
    return valorConta - (valorConta * (desconto / 100))
}
let valorUmKW = valorKW(salarioMinimo)
let consumoEmKW = 1000
let valorMinhaConta = valorConta(consumoEmKW, valorUmKW)
let valorMinhaContaComDesconto = valorContaComDesconto(valorMinhaConta, 10)
console.log('valorUmKW: ', valorUmKW);
console.log('valorConta: ', valorMinhaConta);
console.log('valorContaComDesconto: ', valorMinhaContaComDesconto);