/*
6.(OBRIGATÓRIO) ​Escreva uma aplicação em JS que receba um número do usuário 
e verifique se o número informado está entre 1 e 10. Se estiver, sua aplicação deve imprimir no console a mensagem 
"Número OK!". Se não, deve ser impresso "O número deve ser de 1 a 10!". A verificação do número deve ser feita em uma função.
*/

const rs = require('readline-sync');

let n1 = rs.questionInt('Por favor, informe um número entre 1 e 10: ');

function verificaNumero(){
    if(n1 < 1 || n1 > 10){
        console.log("O número deve ser de 1 a 10!")
    }else{
        console.log('Número OK!')
    }
}

verificaNumero();