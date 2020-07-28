/*3 - (Obrigatório) Crie um programa que simula a compra de um 
produto no supermercado, o programa deve simular o processamento 
de uma compra e imprimir as seguintes mensagens no 
console:
1 - Compra em processamento
2 - Compra aprovada OU Negada (para erros)
O programa deve tratar tanto os erros quanto os sucessos da promisse.*/

class Produto {
    constructor(nome){
        this.nome= nome;
    
    }
}
const produtoEscolhido = new Produto ('farinha')
const produtoEscolhido1 = new Produto ('arroz')
const produtoEscolhido2 = new Produto ('feijão')
const listaDeProdutos=[produtoEscolhido,produtoEscolhido1,produtoEscolhido2]
function random(max) {
    return Math.random() * max;
  }
function EscolhaDoProduto (){
    return new Promise ((resolve,reject) =>{
        setTimeout (() =>{
            let numeroAleatorio=parseInt(random(listaDeProdutos.length-1))
            try {
                let produtoAleatorio= listaDeProdutos[numeroAleatorio]
                resolve (`Você escolheu o ${produtoAleatorio.nome}`)
                
            } catch (error) {
                reject ('erro, tente novamente')
            }
            
        }, random(1000))
    })
}
function Compra(){
    console.log('Início da compra')
    EscolhaDoProduto()
    .then(res =>{
        console.log(res);
    })
    .catch(err => {
        console.log(err)
    });
    console.log('Finalização da compra')
}
Compra()