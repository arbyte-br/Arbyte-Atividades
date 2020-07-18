/*
6.Crie um programa que:

a.Peça o nome de 2 usuários;
b.Para cada usuário, peça 3 números;
c.Imprima na tela qual usuário digitou o maior entre todos os números.
d.Pare a execução.

Neste exercício, cada usuário deve ser representado por um objeto. 
O nome e os números do usuário devem ser propriedades deste objeto.
*/

const rs = require('readline-sync')

let nomeDoUsuario1 = rs.question('\nUsuário 1, informe seu nome: ');

let numero1DoPrimeroUsuario = rs.questionInt(`\n${nomeDoUsuario1}, informe um numero: `);
let numero2DoPrimeroUsuario = rs.questionInt(`${nomeDoUsuario1}, informe outro um numero: `);
let numero3DoPrimeroUsuario = rs.questionInt(`${nomeDoUsuario1}, informe mais um numero: `);

let nomeDoUsuario2 = rs.question(`\nUsuário 2, informe seu nome: `);

let numero1DoSegundoUsuario = rs.questionInt(`\n${nomeDoUsuario2}, informe um numero: `);
let numero2DoSegundooUsuario = rs.questionInt(`${nomeDoUsuario2}, informe outro um numero: `);
let numero3DoSegundooUsuario = rs.questionInt(`${nomeDoUsuario2}, informe mais um numero: `);

let usuarios = { nomeDoUsuario1, nomeDoUsuario2 };
let numerosDoUsuario1 = { numerosJog1: [numero1DoPrimeroUsuario, numero2DoPrimeroUsuario, numero3DoPrimeroUsuario] };
let numerosDoUsuario2 = { numerosJog2: [numero1DoSegundoUsuario, numero2DoSegundooUsuario, numero3DoSegundooUsuario] };

function descobreMaiorNumeroDoUsuario1() {
    var res = 0;    
    for (let i = 0; i < numerosDoUsuario1.numerosJog1.length; i++) {        
        if (numerosDoUsuario1.numerosJog1[i] > res) {
            res = numerosDoUsuario1.numerosJog1[i];
        }
    }
    return res;
}

function descobreMaiorNumeroDoUsuario2() {
    var res2 = 0;    
    for (let j = 0; j < numerosDoUsuario2.numerosJog2.length; j++) {        
        if (numerosDoUsuario2.numerosJog2[j] > res2) {            
            res2 = numerosDoUsuario2.numerosJog2[j];            
        }
    }
    return res2;
}

function descobreMaiorNumero() {
    if (descobreMaiorNumeroDoUsuario1(numerosDoUsuario1.numerosJog1) > descobreMaiorNumeroDoUsuario2(numerosDoUsuario2.numerosJog2)) {
        let maior1 = descobreMaiorNumeroDoUsuario1(numerosDoUsuario1.numerosJog1);
        console.log(`\nO(a) ${usuarios.nomeDoUsuario1} digitou o maior número: ${maior1}.\n`);
    } else {
        let maior2 = descobreMaiorNumeroDoUsuario2(numerosDoUsuario2.numerosJog2);
        console.log(`\nO(a) ${usuarios.nomeDoUsuario2} digitou o maior número: ${maior2}.\n`);
    }    
}
descobreMaiorNumero();





/*====================== TESTES ======================*/

// let produtos = {
//     dados: [
//         'cleiton',
//         'jose',
//         3,
//         4,
//         5]
// };

// let objKeys = Object.keys(produtos)

// let escolhaProdutos = objKeys[rs.keyInSelect(objKeys, 'O que deseja comprar: ')];

// console.log(typeof(escolhaProdutos[4]));

//  let catalogoDeProdutos = 
//     {
//         'Produto - 1': 'Computador: R$ 2.000,00',
//         'Produto - 2': 'Impressora: R$ 200,00',
//         'Produto - 3': 'Mouse: R$ 50,00',
//         'Produto - 4': 'Celular: R$ 1.500,00',
//         'Produto - 5': 'Carregador: R$50,00'
//     }

//let chaves = Object.keys(catalogoDeProdutos);

//console.log(valor);

// for(let i = 0; i < chaves.length; i++){

//     console.log(`${chaves[i]} catalogoDeProdutos['Produto - 1']`);
// }

// console.log(Object.keys(catalogoDeProdutos));

        // Produto1 = 'Computador: R$ 2.000,00',
        // Produto2 = 'Impressora: R$ 200,00',
        // Produto3 = 'Mouse: R$ 50,00',
        // Produto4 = 'Celular: R$ 1.500,00',
        // Produto5 = 'Carregador: R$50,00'