/*
11. Faça um programa que receba uma palavra e verifica se a palavra está cometendo o
seguinte erro de português:
Antes de “p” ou “b” devemos usar M
Caso a palavra esteja errada informar o erro
Se não dizer que a palavra está certa.
Utilize o método includes()
*/

const rs = require('readline-sync');

var palavra = rs.question('Informe qualquer palavra: ');

if(palavra.includes('mb') || palavra.includes('mp')){
    console.log(`A palavra ${palavra} foi escrita corretamente.`)
}else if(palavra.includes('nb') || palavra.includes('np')){
    console.log(`Antes de p e b deve conter a letra M.`);
}else{
    console.log(`A palavra digitada foi: ${palavra}.`)
}