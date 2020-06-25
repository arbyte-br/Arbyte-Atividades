let rs = require('readline-sync')

let numero = rs.questionFloat("Insira um número para multiplicar: ")
let numero2 = rs.questionInt("Insira o segundo número: ")

let contador = 0
let resultado = 0

    while(contador < numero2){
        resultado = resultado + numero
        contador++
    }
         console.log("O resultado é: " +resultado)
