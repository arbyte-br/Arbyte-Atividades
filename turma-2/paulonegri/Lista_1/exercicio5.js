/*Escreva um programa para ler 3 valores inteiros (considere que não
serão lidos valores iguais) e escrevê-los em ordem crescente.*/

let rs = require('readline-sync')
let valor1 = rs.questionInt('Digite o primeiro valor: ')
let valor2 = rs.questionInt('Digite o segundo valor: ')
let valor3 = rs.questionInt('Digite o terceiro valor: ')

if(valor1 > valor2 && valor1 > valor3 && valor2 > valor3){
    console.log(`Valores em ordem crescente \n>${valor3}\n>${valor2}\n>${valor1}`)
}else if(valor1 > valor2 && valor1 > valor3 && valor2 < valor3){
    console.log(`Valores em ordem crescente \n>${valor2}\n>${valor3}\n>${valor1}`)
}else if(valor1 > valor2 && valor1 < valor3 && valor2 < valor3){
    console.log(`Valores em ordem crescente \n>${valor2}\n>${valor1}\n>${valor3}`)
}else if(valor1 < valor2 && valor1 < valor3 && valor2 < valor3){
    console.log(`Valores em ordem crescente \n>${valor1}\n>${valor2}\n>${valor3}`)
}else if(valor1 < valor2 && valor1 > valor3 && valor2 > valor3){
    console.log(`Valores em ordem crescente \n>${valor3}\n>${valor1}\n>${valor2}`)
}else if(valor1 < valor2 && valor1 < valor3 && valor2 > valor3){
    console.log(`Valores em ordem crescente \n>${valor1}\n>${valor3}\n>${valor2}`)
}else{
    console.log(`Não é permitido repetir valores iguais!`)
}