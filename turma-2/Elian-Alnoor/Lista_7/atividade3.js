// ​Faça uma função que receba uma lista de números inteiros (um 
//     array) e imprima no console qual o maior. Ao executar o seu código, deve ser impresso 
//     na tela o maior número. (Não é necessário pedir dados para o usuário, você pode 
//     definir os valores usados na aplicação aleatoriamente) 
     
let lista = [1000, 750, 850, 950]

function maiorNum(listaNum){
    let maior = listaNum[0]
    for(i=1; i<listaNum.length; i++){
            if(listaNum[i] > maior){
                 maior = listaNum[i]
        } 
    } return maior
}
 console.log(maiorNum(lista))