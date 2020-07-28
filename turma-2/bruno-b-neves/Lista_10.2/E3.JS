// (Obrigatório) Crie um programa que simula a compra de um produto no supermercado, 
// oprograma deve simular o processamento de uma compra e imprimir as seguintes mensagensno console: 
// 1 - Compra em processamento2 - Compra aprovada OU Negada(para erros

const rs = require('readline-sync');

const random = (max) => {
    Math.random() * max
}

const opcaoProduto = (produto) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`Você comprou um(a) ${produto}!`);
        }, random(3000))
    })
}

class Usuario {
    constructor (){
        this.name = rs.question('Digite seu nome: ');
    }

    mercado (){
        console.log(`Bem vindo ao supermercado ${this.name}!\n`);

        console.log('[1] - Arroz');
        console.log('[2] - Feijão');
        console.log('[3] - Carne');

        let opcao = rs.questionInt('O que deseja comprar? : ');

        switch(opcao) {
            case 1:
                opcao = 'Arroz'
                break;
            case 2: 
                opcao = 'Feijão'
                break;
            case 3:
                opcao = 'Carne'
                break;
        }

        console.log('Compra em processamento...');

        opcaoProduto(opcao)
            .then(res => {
                console.log(res)
                console.log('Compra realizada com sucesso')
            })
            .catch(err => {
                console.log(err);
                console.log('Ocorreu uma falha na compra')
            })
    }
}

let user = new Usuario();
user.mercado();