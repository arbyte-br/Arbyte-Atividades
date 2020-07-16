// ​Escreva uma aplicação em JS que receba dois usuários. De cada 
// usuário, a aplicação deve receber um número de 1 a 100. A aplicação deve informar se 
// algum dos usuários informou o número correto. (Você pode escolher qual vai ser o 
// número correto) 
 
let rs = require("readline-sync")

let num1 = rs.questionInt("Usuário1...insira um número de 1 a 100:\n")

let num2 = rs.questionInt("Usuário2...insira um número de 1 a 100:\n")

let numCorreto = 50

function acertar(n1, n2){
    if(n1 === 50){
        return "Usuário1 acertou"
    } else if(n2 === 50){
        return "Usuário2 acertou"
    } else {
        return "tentem de novo"
    }
}
console.log(acertar(num1, num2))