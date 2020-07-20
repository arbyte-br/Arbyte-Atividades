/*
15.Faça uma função que receba um número e retorne se é perfeito ou não.Após isso solicite 
ao usuário para inserir um número e imprimir se é perfeito ou nãoutilizando a função e imprimindo o 
resultado no final.OBS: Um número perfeito é aquele que a soma do seus divisores (auto excluindo) éigual a ele mesmo 
Exemplo 6 possui os seguintes divisores1 + 2 + 3 = 6.

Outros números perfeitos conhecidos:

6, 28, 496, 8128, 33550336, 8589869056…

*/

const rs = require('readline-sync');

let n1 = rs.questionInt('Por favor, informe um número para saber se ele é perfeito: ');

let total = 0;

function numeroPerfeito(){
    for(let i = 0; i < n1; i++){
        if(n1 % i == 0){
            total = total + i;
            console.log(i);            
        }
    }
    if(total == n1){
        console.log(`O número informado - ${n1} - é perfeito!`);
    }else{
        console.log(`O número informado - ${n1} - não é perfeito.`);
    }
}

numeroPerfeito();