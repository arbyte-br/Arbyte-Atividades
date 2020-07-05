//Faça um programa que receba uma palavra e verifica se a palavra
//está cometendo o seguinte erro de português
//Antes de “p” ou “b” devemos usar M
//Caso a palavra esteja errada informar o erro
//Se não dizer que a palavra está certa.
//Utilize o método includes()

let rs = require('readline-sync')
let palavra = rs.question(`Digite uma palavra aqui: `)

if(palavra.includes('nb') || palavra.includes('np')){
  console.log(`Antes de p ou b devemos colocar a letra "M", e nao a letra "N"`)   
}else{  
  console.log(`A palavra esta certa!`) 
}