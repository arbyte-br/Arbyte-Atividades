// ​Escreva uma aplicação em JS que receba um número do usuário e 
// verifique se o número informado está entre 1 e 10. Se estiver, sua aplicação deve 
// imprimir no console a mensagem "Número OK!". Se não, deve ser impresso "O número 
// deve ser de 1 a 10!". A verificação do número deve ser feita em uma função.

let rs = require("readline-sync")

function comp(x){
    if(x >= 1 && x <= 10){
        return "Número OK!"
    } else {
        return "O número deve ser de 1 a 10"
    }
}
console. log(comp(rs.questionInt("insira um número:\n")))