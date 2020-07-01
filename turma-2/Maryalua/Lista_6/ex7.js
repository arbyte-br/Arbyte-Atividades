//Faça um programa que receba uma palavra e verifica se a palavra
//está cometendo o seguinte erro de português
//Antes de “p” ou “b” devemos usar M
//Caso a palavra esteja errada informar o erro
//Se não dizer que a palavra está certa.
//Utilize o método ​ includes() permite saber se a string contém um certo texto


let rs = require('readline-sync');

let palavra = rs.question('insira uma palavra:');

if (palavra.includes('mp') || palavra.includes('mb')) {
    console.log('a palavra inserida foi escrita corretamente')
} else if (palavra.includes('np') || palavra.includes('nb')) {
    console.log('a palavra foi escrita de maneira incorreta, antes de p e b, usa-se o m')
} 