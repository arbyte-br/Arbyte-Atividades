let rs = require("readline-sync")

let numeros = []

let pergunta1 = rs.questionInt("Escreva o primeiro valor: ")

numeros.push(pergunta1)

let pergunta2 = rs.questionInt("Escreva o segundo valor: ")

numeros.push(pergunta2)

let pergunta3 = rs.questionInt("Escreva o terceiro valor: ")

numeros.push(pergunta3)



console.log("Ordem crescente deles: " + numeros.sort())