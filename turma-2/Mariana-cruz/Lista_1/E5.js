// (OBRIGATÓRIO) Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

// se os valores forem !== imprimir em ordem crescente
// se não voltar com uma mensagem de erro pedindo para começar de novo

let rs = require ('readline-sync')


let valor1= rs.questionInt('Insira um numero:\n')
let valor2= rs.questionInt('Insira um numero:\n')
let valor3= rs.questionInt('Insira um numero:\n')


if (valor1 > valor2 && valor1 > valor3){

    if(valor2 > valor3){
        console.log(`${valor3}; ${valor2}; ${valor1}`)
    }
    else{
        console.log(`${valor2}; ${valor3}; ${valor1}`)
    }
}
else if(valor2 > valor1 && valor2 > valor3){
    
    if(valor1 > valor3){
        console.log(`${valor3}; ${valor1}; ${valor2}`)
    }
    else{
        console.log(`${valor1}; ${valor3}; ${valor2}`)
    }
}
else{
    if(valor2 > valor1){
        console.log(`${valor1}; ${valor2}; ${valor3}`)
    } 
    else{
        console.log(`${valor2}; ${valor1}; ${valor3}`)
    }
}