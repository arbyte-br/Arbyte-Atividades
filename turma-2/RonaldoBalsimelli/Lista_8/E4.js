/*(OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício anterior porém
pergunte para o usuário a marca, cor e o valor do carro.*/

let rs = require ("readline-sync")

let marca = rs.question('Por favor, Informe a marca do Veiculo \n')
let cor = rs.question('Por favor, Informe a cor do Veiculo \n')
let valor = rs.question('Por favor, Informe o valor do Veiculo \n')

let carro = {
    marca: marca,
    cor: cor,
    valor, valor
}

console.log(carro)

