/*3 - (Obrigatório) Crie um programa que simula a compra de um 
produto no supermercado, o programa deve simular o processamento 
de uma compra e imprimir as seguintes mensagens no 
console:
1 - Compra em processamento
2 - Compra aprovada OU Negada (para erros)
O programa deve tratar tanto os erros quanto os sucessos da promisse.*/

const rs = require('readline-sync');

function random (max){
    Math.random() * max
}

function opcaoProduto (produto){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(`Obrigado pela visita! Você comprou ${produto}! Volte Sempre!`);
        }, random(4000))
    })
}

class Usuario {
    constructor (){
        this.nome = rs.question('Bem vindo ao SuperMarket, por favor digite seu nome: ')
    }

    mercado (){
        console.log(`\nÉ um prazer te ter aqui ${this.nome}! Vamos as compras?`);

        console.log('[1] - Cerveja.');
        console.log('[2] - Amendoim.');
        console.log('[3] - Bacalhau.');
        console.log('[4] - Arroz.');
        console.log('[5] - Feijão.');
        console.log('[6] - Bacon.');
        console.log('[7] - Carne Seca.')

        let opcao = rs.questionInt('Por favor, insira o numero da opção que deseja: \n')

            switch(opcao){
                case 1:
                    opcao = 'Cerveja'
                    break;

                case 2:
                    opcao = 'Amendoim'
                    break;

                case 3: 
                    opcao = 'Bacalhau'
                    break;
                
                case 4: 
                    opcao = 'Arroz'
                    break;

                case 5: 
                    opcao = 'Feijão'
                    break;

                case 6: 
                    opcao = 'Bacon'
                    break;

                case 7: 
                    opcao = 'Carne Seca'
                    break;
            }

        console.log('Processando...');

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