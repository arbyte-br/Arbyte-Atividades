//Faça um programa que receba uma palavra e verifica se ela termina com “al” se termina com “al” 
//então imprime a palavra se não imprime “palavra não identificada”. Utilize o método ​endsWith() 

let rs = require("readline-sync")

let respostaUsuario = rs.question("Digite uma palavra: ").toLowerCase()


let resultado = respostaUsuario.endsWith("al")


if(resultado){
    console.log(respostaUsuario)
}else{
   console.log("Palavra não identificada")
}