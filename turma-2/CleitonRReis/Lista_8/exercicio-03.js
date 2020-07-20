/*
3.(OBRIGATÓRIO) Crie um programa que crie um objeto chamado "carro" com as propriedades "marca", "cor" e "valor" e 
imprima o objeto na tela. (Você pode decidir o valor de "marca", "cor" e "valor", não é necessário pedir para o usuário)
*/

let carro = {};

carro.marca = 'Ford';
carro.modelo = 'Mustang';
carro.cor = 'Preta';
carro.valor = '500 mil';

console.log(`\nA marca do carro é: ${carro.marca};`);
console.log(`O modelo do carro é: ${carro.modelo};`);
console.log(`A cor do carro é: ${carro.cor};`);
console.log(`O valor do carro é: ${carro.valor}.\n`);