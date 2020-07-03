// ​Faça um programa que receba uma palavra e verifica se a palavra 
// está cometendo o seguinte erro de português 
// Antes de “p” ou “b” devemos usar M 
// Caso a palavra esteja errada informar o erro 
// Se não dizer que a palavra está certa.  
// Utilize o método ​includes() 

let rs = require("readline-sync")

let palavra = rs.question("insira uma palavra:\n")

palavra = palavra.toLowerCase()

if (palavra.includes("np")){
    console.log("Erro de português...n antes de p")
} else if(palavra.includes("nb")){
    console.log("Erro de português...n antes de b")
} else{
    console.log("a palavra está certa!")
}