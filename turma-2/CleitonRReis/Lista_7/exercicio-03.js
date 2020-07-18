/*
3.(OBRIGATÓRIO) ​
Faça uma função que receba uma lista de números inteiros (um array) e imprima 
no console qual o maior. Ao executar o seu código, deve ser impressona tela o maior número. 
(Não é necessário pedir dados para o usuário, você podedefinir os valores usados na aplicação aleatoriamente)
*/

let numeros = [20, 2, 3, 5, 200, 10, 1, 15, 0, 30];


function maiorNumero() {
    let res = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > res) {
            res = numeros[i];
        }
    }
    return res;
}
let resultado = maiorNumero(numeros);
console.log(resultado);