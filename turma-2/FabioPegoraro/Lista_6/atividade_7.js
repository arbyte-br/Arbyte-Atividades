//Faça um programa que receba uma palavra e verifica se a palavra está cometendo o seguinte erro de português
//Antes de “p” ou “b” devemos usar M Caso a palavra esteja errada informar o erro 
//Se não dizer que a palavra está certa.  Utilize o método ​includes() 

let rs = require("readline-sync")

let respostaUsuario = rs.question("Digite uma palavra: ")



if (respostaUsuario.includes("np")){
    console.log("Você está escrevendo, " + respostaUsuario, "porem antes de “p” devemos usar M, sua palaravra está errada.")
}else if(respostaUsuario.includes("nb")){
    console.log("Você está escrevendo, " + respostaUsuario, "porem antes de “b” devemos usar M, sua palaravra está errada.")
}else{
    console.log("Sua palavra está correta.")
}