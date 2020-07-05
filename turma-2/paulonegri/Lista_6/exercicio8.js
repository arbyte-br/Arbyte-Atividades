//Faça um programa que receba uma palavra e diga se há vogais ou não.
//Utilize o método indexOf()
let rs = require('readline-sync')
let palavra = rs.question('Digite uma palavra aqui: ')


if(palavra.indexOf('a') >0||palavra.indexOf('e')>0||
palavra.indexOf('i')>0||palavra.indexOf('o')>0||palavra.indexOf('u')>0){
  console.log('A palavra tem vogais') 
}else{ 
  console.log('A palavra nao tem vogais')
}
