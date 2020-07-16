// Faça uma função que receba dois valores numéricos inteiros e 
// imprima no console qual o maior. Ao executar o seu código, deve ser impresso na tela o 
// maior número. (Não é necessário pedir dados para o usuário, você pode definir os 
// valores usados na aplicação aleatoriamente) 

function maiorNum(n1, n2){
    if (n1 > n2){
        return n1
    } else {
        return n2
    }
}
console.log(maiorNum(14, 4))