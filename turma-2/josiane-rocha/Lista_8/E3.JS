/* 
(OBRIGATÓRIO) Crie um programa que crie um objeto chamado "carro" com as
propriedades "marca", "cor" e "valor" e imprima o objeto na tela. (Você pode decidir o
valor de "marca", "cor" e "valor", não é necessário pedir para o usuário)
*/

let rs = require('readline-sync')

let modelo = 'March'
let marca = 'Nissan'
let cor = 'Verde'
let valor = '29 mil'

let carro = {
   marca: marca, cor : cor, modelo: modelo, valor: valor
}
console.log(carro)
