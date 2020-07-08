/*(OBRIGATÓRIO)​Faça um programa que receba uma palavra e verifica se ela terminacom “al” se termina com “al” então imprime a palavra se não imprime “palavra nãoidentificada”*/


var rs = require('readline-sync');

var palavra = [];

palavra = rs.question("Digite uma palavra, por favor! \n");

if(palavra.endsWith('al')){
    console.log("Essa palavra termina com 'al' ! ")
} else {
    console.log("Palavra não identificada! ")
}
