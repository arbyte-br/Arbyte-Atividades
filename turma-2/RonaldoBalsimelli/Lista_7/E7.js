/*
(OBRIGATÓRIO) Escreva uma aplicação em JS que receba dois usuários. De cada
usuário, a aplicação deve receber um número de 1 a 100. A aplicação deve informar se
algum dos usuários informou o número correto. (Você pode escolher qual vai ser o
número correto)
*/

let rs = require("readline-sync")

let user1 = rs.questionInt("Jogador 1.  Por favor, insira um número de 1 a 100: \n")
let user2 = rs.questionInt("Jogador 2.  Por favor, insira um número de 1 a 100: \n")

let numCorreto = 50

function megaSena(n1, n2){
    
    if(n1 === 77){
        return "Jogador 1 acertou"
    } 
    
    else if(n2 === 77){
        return "Jogador 2 acertou"
    }   
    
    else {
        return "Não foi dessa vez"
    }
}
console.log(megaSena(user1, user2)) 