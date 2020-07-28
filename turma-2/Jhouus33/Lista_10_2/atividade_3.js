// (Obrigatório) Crie um programa que simula a compra de um produto no supermercado, o
// programa deve simular o processamento de uma compra e imprimir as seguintes mensagens
// no console:
// 1 - Compra em processamento
// 2 - Compra aprovada OU Negada (para erros)
// O programa deve tratar tanto os erros quanto os sucessos da promisse.

const { resolve } = require("dns");
const { rejects } = require("assert");
const { questionFloat } = require("readline-sync");

function random(max) {
    return Math.random() * max;
  }

function simulateCompra() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let valorCompra = 150
            let saldoDisponivel = questionFloat('Digite o saldo disponivel em seu cartão: \n')
            if(valorCompra <= saldoDisponivel){
                resolve('Compra aprovada')
            }else{
                reject('Compra negada') // simulação
            }
        }, 1000)
    })
}
           
 function simulateCompra2(){
    console.log('Compra em processamento');
    
    simulateCompra()
        .then(res => console.log(res))
        .catch(err => console.log(err));

    
}

simulateCompra2()