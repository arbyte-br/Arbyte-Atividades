// Crie um programa que faça o mesmo do exercício anterior porém
// pergunte para o usuário a marca, cor e o valor do carro.

let readlineSync = require('readline-sync');

let marca = readlineSync.question('Digite a marca do veículo: ')
let cor = readlineSync.question('Digite a cor do veículo: ')
let valor = readlineSync.questionFloat('Digite a marca do veículo: ')

let carro = {marca, cor, valor}

console.log(carro)