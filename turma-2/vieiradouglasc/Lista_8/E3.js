// Crie um programa que crie um objeto chamado "carro" com as
// propriedades "marca", "cor" e "valor" e imprima o objeto na tela. (Você pode decidir o
// valor de "marca", "cor" e "valor", não é necessário pedir para o usuário)

let readlineSync = require('readline-sync');

let carro = {
    marca: "Fiat",
    cor: "Vinho",
    valor: 6000
}

console.log(carro)