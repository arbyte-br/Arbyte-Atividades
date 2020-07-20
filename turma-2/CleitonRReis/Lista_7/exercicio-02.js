/*
2.(OBRIGATÓRIO) ​Faça uma função que receba dois valores numéricos inteiros e imprima no console qual o maior. 
Ao executar o seu código, deve ser impresso na tela o maior número. 
(Não é necessário pedir dados para o usuário, você pode definir osvalores usados na aplicação aleatoriamente)
*/

function maiorNumero(n1, n2){
    if(n1 > n2){
       return n1;
    }else{
       return n2;
    }
}

let res = maiorNumero(5, 3);
console.log(res);