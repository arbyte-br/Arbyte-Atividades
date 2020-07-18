/*
4.(OBRIGATÓRIO) Crie um programa que faça o mesmo do exercício 
anterior, porém, pergunte para o usuário a marca, cor e o valor do carro.
*/

const rs = require('readline-sync');

let marca = rs.question('Por favor, informe a marca do seu carro: ');
let modelo = rs.question('Por favor informe o modelo do seu carro: ');
let cor = rs.question('Por favor, informe a cor do seu carro: ');
let valor = rs.question('Por favor, informe o valor do seu carro: ');

let carro = {
    marca,
    modelo,
    cor,
    valor
};

//console.log(carro);

console.log(`\nA marca do carro é: ${carro.marca};`);
console.log(`O modelo do carro é: ${carro.modelo};`);
console.log(`A cor do carro é: ${carro.cor};`);
console.log(`O valor do carro é: ${carro.valor}.\n`);