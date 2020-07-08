/* (OBRIGATÓRIO) Faça um programa que receba uma palavra e verifica se a palavra
está cometendo o seguinte erro de português
Antes de “p” ou “b” devemos usar M
Caso a palavra esteja errada informar o erro
Se não dizer que a palavra está certa.
Utilize o método includes() */

rs = require ('readline-sync')

palavra = rs.question("Digite uma palavra: \n")

if (palavra.includes("mp" && "mb")) {
    console.log ("Sua palavra está correta") 
    } else { 
    console.log("Sua palavra está incorreta!")
    }
