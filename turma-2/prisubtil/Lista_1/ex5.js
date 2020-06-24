/*(OBRIGATÓRIO) Escreva um programa para ler 3 valores inteiros (considere que não
    serão lidos valores iguais) e escrevê-los em ordem crescente.*/

let readlineSync = require('readline-sync');
let valor1 = readlineSync.questionInt('Digite o primeiro valor: ')
let valor2 = readlineSync.questionInt('Digite o segundo valor: ')
let valor3 = readlineSync.questionInt('Digite o terceiro valor: ')
if(valor1<valor2 && valor3){
    console.log(valor1)
    if(valor2<valor3){
        console.log(valor2,valor3);
    }else{
        console.log(valor3,valor2);
    }
}else{
    if(valor2<valor3){
        console.log(valor2,valor3,valor1);
    }else{
        console.log(valor3,valor2,valor1);
    }
    
}
    