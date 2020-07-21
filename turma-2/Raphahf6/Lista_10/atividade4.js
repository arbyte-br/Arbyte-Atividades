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

class carro {
    constructor() {
        console.log('Cadastre o seu carro')
        this.nome = rs.question('Digite o nome do seu carro: ')
        this.modelo = rs.question('Qual o modelo do seu carro: ')
        this.cor = rs.question('Qual a cor do carro ? ')
    }


}

const carro1 = new carro()
const carro2 = new carro()

if (carro1.nome === carro2.nome && carro1.modelo === carro2.modelo) {
    console.log('Os carros são iguais')
} else {
    console.log('Os carros não são iguais')
}
