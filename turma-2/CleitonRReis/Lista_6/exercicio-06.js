/*
6.(OBRIGATÓRIO) ​Faça um programa que receba uma palavra e verifica se ela terminacom “al”. 
Se termina com “al” então imprime a palavra se não imprime “palavra nãoidentificada”.
Utilize o método ​endsWith()
*/

const rs = require('readline-sync');

var palavra = rs.question('Informe qualquer palavra: ');

var final = palavra;

if(final.endsWith('al')){
    console.log(`A palavra digitada foi: ${final}`);
}else{
    console.log('Desculpe! Palavra não identicada!');
}