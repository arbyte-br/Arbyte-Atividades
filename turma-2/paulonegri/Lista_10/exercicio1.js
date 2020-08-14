/*Criar um algoritmo que receba 2 carros e verifique se os carros são
iguais
Para isso :
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
inicialize as propriedades com estes valores.
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
cor.
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
e cor.
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor*/

const rs = require('readline-sync');

class Carro{
    constructor(nome, modelo, cor){
        this.nome = rs.question('qual o nome do carro escolhido?\n');
        this.modelo = rs.question('qual o modelo do carro escolhido?\n');
        this.cor = rs.question('qual a cor do carro escolhido?\n');
    }
}

const primeiroCarro = new Carro();
primeiroCarro.nome 
primeiroCarro.modelo
primeiroCarro.cor 

const segundoCarro = new Carro();
segundoCarro.nome 
segundoCarro.modelo 
segundoCarro.cor 

primeiroCarro.nome === segundoCarro.nome || primeiroCarro.modelo === segundoCarro.modelo 
    ? console.log('Os carros são iguais.')
    : console.log('Os carros nao sao iguais.')
