/*Faça uma função que receba dois valores numéricos inteiros e imprima no console qual o maior. 
Ao executar o seu código, deve ser impresso na tela o maior número. (Não é necessário pedir dados 
para o usuário, você pode definir os valores usados na aplicação aleatoriamente)*/

let num1 = 7
let num2 = 18


function Maior(){
    if(num1 > num2){
       return (num1)
    }else{ 
        return (num2)
    }  
} 
console.log(`Esse é o maior numero ${Maior()} .`)

