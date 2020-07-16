 let rs = require('readline-sync')



var quantidade = rs.questionFloat('Quantas maças ?')

var preço1 = 0.30 // comprar menos de 12 unidade
var preço2 = 0.25 // comprar mais de 12 unidade


//SEMPRE QUE COLOCAR VALORES EM RAIS, COLOCAR  . PONTO


if ( quantidade <= 12 ) {
    resultado = quantidade * preço1
    console.log(resultado)
}else{
    resultado = quantidade * preço2
    console.log(resultado)

}



/* 4. (OBRIGATÓRIO) As maçãs custam R$ 0,30 cada 

se forem compradas menos do que 12, 
e R$ 0,25 

se forem compradas 12 ou mais.
 Escreva um programa que leia o número
de maçãs compradas, calcule e escreva o valor total da compra */

