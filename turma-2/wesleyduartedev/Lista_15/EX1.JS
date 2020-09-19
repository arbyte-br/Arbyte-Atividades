//1 - Utilizando o Reduce, crie um algoritmo que faça a soma de valores de um array.//

const cars = require("./cars.json")
const rs = require("readline-sync")

let listaNumeros =[ 18,9,45,13,90,11,34]

let somaTotal = listaNumeros.reduce((numeroAnterior, proxNumero)=> {
    return numeroAnterior + proxNumero;
    
})

console.log(somaTotal+listaNumeros.length)