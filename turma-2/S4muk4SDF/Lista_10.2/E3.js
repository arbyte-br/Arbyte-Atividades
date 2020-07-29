// 3 - (Obrigatório) Crie um programa que simula a compra de um produto no supermercado, 
// o programa deve simular o processamento de uma compra e imprimir as seguintes mensagens no console:
// 1 - Compra em processamento
// 2 - Compra aprovada OU negada (para erros)
// O programa deve tratar tanto os erros quanto os sucessos da promisse.

const rs = require('readline-sync');

function random (max){
    Math.random() * max
}

function opcaoProduto (produto){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`Você comprou um(a) ${produto}!`);
        }, random(10000))
    })
}

class Usuario {
    constructor (){
        this.nome = rs.question('Digite seu nome: ')
    }

    mercado (){
        console.log(`Bem vindo ao supermercado ${this.nome}!\n`);

        console.log('[1] - Maçã.');
        console.log('[2] - Carne.');
        console.log('[3] - Refrigerante.');
       
        let opcao = rs.questionInt('\nEscolha o que deseja comprar: ')

            switch(opcao){
                case 1:
                    opcao = 'Maçã'
                    break;
                    
                case 2:
                    opcao = 'Carne'
                    break;
                    
                case 3: 
                    opcao = 'Refrigerante'
                    break;
            }

        console.log('Compra em processamento...');

        opcaoProduto(opcao)
            .then(res => {
                console.log(res);
                console.log(`Compra realizada com sucesso!`);
            })
            .catch(err => {
                console.log(err);
                console.log('Ocorreu uma falha na sua compra!');
            })
    }
}

let user = new Usuario()
user.mercado()