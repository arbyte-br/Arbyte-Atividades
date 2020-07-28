//  (Obrigatório) Crie um programa que simula a compra de um produto no supermercado, 
// o programa deve simular o processamento de uma compra e imprimir as seguintes mensagens
// no console:1 - Compra em processamento 2 - Compra aprovada OU Negada (para erros)
// O programa deve tratar tanto os erros quanto os sucessos da promisse.
let rs = require ("readline-sync")
function compraAprovada(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           let valorDaCompra = 200
           let saldoCartao = rs.questionFloat ("Qual o saldo disponível do seu cartão?\n")
           if (valorDaCompra <= saldoCartao){
               resolve("Sua compra foi aprovada")
           }else(valorDaCompra >= saldoCartao)
           reject("Sua compra não foi aprovada!")
        }, random(1000))
    })
    }
    function random(max) {
        return Math.random() * max;
      }
    