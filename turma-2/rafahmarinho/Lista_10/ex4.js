// (OBRIGATÓRIO) Criar um algoritmo que receba 2 carros e verifique se os carros são
// iguais
// Para isso :
// Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
// inicialize as propriedades com estes valores.
// Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
// cor.
// Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
// e cor.
// Ao final o algoritmo deve comparar se os carro são iguais.
// Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.

const rs = require('readline-sync')

class Carro {
    constructor(marca,modelo,cor){
        this.marca = rs.question('Marca do carro: ')
        this.modelo = rs.question('Modelo do carro: ')
        this.cor = rs.question('Cor do carro: ')
    }
}
console.log('========= PRIMEIRO CARRO =========')
const carroUm = new Carro()
console.clear()
console.log('========= SEGUNDO CARRO =========')
const carroDois = new Carro()
const validacao = carroUm.marca != carroDois.marca || carroUm.modelo != carroDois.modelo 

validacao ? console.log(`Os carros são diferentes!`) : console.log(`Os carros são iguais!`)