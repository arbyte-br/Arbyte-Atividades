// Faça um programa que calcule e imprima o valor em reais de cada kw, o valor
// em reais a ser pago o novo valor a ser pago por essa residência com um
// desconto de 10%. Dado: 100 kilowatts custa 1/7 do salario minimo. quantidade
// de kw gasto por residência.


let salarioMinimo = 1045
let cemkiliwatts = salarioMinimo / 7

let consumo = 237

let valorConsumo = cemkiliwatts * (237 / 100)
let valorConsumo10 = valorConsumo * 0.9

console.log(`Valor a ser pago R$ ${valorConsumo.toFixed(2)}, ou, SOMENTE HOJE, com 10% de desconto R$: ${valorConsumo10.toFixed(2)}`)

// console.log(cemkiliwatts)