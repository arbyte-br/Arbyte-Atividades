/*Escreva um programa que apresente quatro opções:
(a) consulta saldo, (b) saque, (c) depósito e (d) sair.
O saldo deve iniciar em R$ 0,00.
A cada saque ou depósito o valor do saldo deve ser atualizado. Exemplo:
Caso o usuário tente sacar mais do que possui em conta, trazer uma mensagem de erro
e retornar à tela de opções*/

let rs = require(`readline-sync`)
let saldo = 0.00

let pergunta

while(pergunta !== 'd'){
    console.log(`O que deseja fazer?`)
    let opcoes = rs.question(` (A) para consulta de saldo\n (B) para saque\n (C) para deposito\n (D) para sair\n >`).toUpperCase()
    if(opcoes == 'A'){
        console.log(`Seu saldo é de R$${saldo.toFixed(2)} `)
    }
    if(opcoes == 'B'){
        let retirada = rs.questionFloat(`Quanto gostaria de retirar?\n`)
        retirada > saldo ? console.log(`Saldo insuficiente.`) 
        : saldo = saldo - retirada
        
    }
    if(opcoes == 'C'){
        let entrada = rs.questionFloat(`Quanto deseja depositar?\n`)
        saldo = saldo + entrada
    }
    if(opcoes == 'D'){
        break
    }
}