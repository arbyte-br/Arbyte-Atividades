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
        this.nome = nome;
        this.modelo = modelo;
        this.cor = cor;
    }
}

const primeiroCarro = new Carro();
primeiroCarro.nome = rs.question('qual o nome do carro escolhido?\n');
primeiroCarro.modelo = rs.question('qual o modelo do carro escolhido?\n');
primeiroCarro.cor = rs.question('qual a cor do carro escolhido?\n');

const segundoCarro = new Carro();
segundoCarro.nome = rs.question('qual o nome do carro escolhido?\n');
segundoCarro.modelo = rs.question('qual o modelo do carro escolhido?\n');
segundoCarro.cor = rs.question('qual a cor do carro escolhido?\n');

primeiroCarro.nome === segundoCarro.nome || primeiroCarro.modelo === segundoCarro.modelo 
    ? console.log('Os carros são iguais.')
    : console.log('Os carros nao sao iguais.')
