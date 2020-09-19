//2 - Crie um algoritmo utilizando o reduce que calcule a média de um array de números.


const cars = require("./cars.json")
const rs = require("readline-sync")

let listaNumeros =[ 10,10,10,1]


let divisao =  listaNumeros.reduce((numeroAnterior,proxNumero)=> {
    return numeroAnterior + proxNumero;
        
})

console.log(divisao/listaNumeros.length)