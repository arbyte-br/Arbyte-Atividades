let rs=require('readline-sync') 

//Usuário insere um número para verificação 

let num = rs.questionInt("Insira um número para verificar se é par ou ímpar: ")

let n = num / 2 

//Verificação de se o número é par ou impar

if (n || 0 ) {
    console.log("O valor é par")
} else if (n ||  1) {    
    console.log("O valor é impar")
}