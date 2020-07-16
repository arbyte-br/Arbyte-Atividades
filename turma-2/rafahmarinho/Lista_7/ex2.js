// (OBRIGATÓRIO) Faça uma função que receba dois valores numéricos inteiros e
// imprima no console qual o maior. Ao executar o seu código, deve ser impresso na tela o
// maior número. (Não é necessário pedir dados para o usuário, você pode definir os
// valores usados na aplicação aleatoriamente)
function valores(n1, n2) {
    if (n1 > n2){
       return console.log(`${n1} é maior que ${n2}`)
    } else{
      return console.log(`${n2} é maior que ${n1}`) 
    }   
}
valores(3,1)