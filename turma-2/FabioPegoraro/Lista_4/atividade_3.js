//Escreva um programa javascript para escrever o seguinte padrão na tela, com N linhas: 
//*  
//* *  
//* * *  
//* * * *  
//* * * * * 
 
//Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5)

let rs = require("readline-sync")

let respotasUsuario = rs.questionFloat("Digite um número maior que 0: ")
let contador = 1
let asteristico = '*'
if (respotasUsuario > 0){
    while(contador <= respotasUsuario){
        console.log(asteristico.repeat(contador))
        contador++ 
    }
}else{
    console.log("Número precisa ser maior que 0.")
}