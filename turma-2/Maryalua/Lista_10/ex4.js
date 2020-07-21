//4. (OBRIGATÓRIO) ​ Criar um algoritmo que receba 2 carros e verifique se os carros são
//iguais
//Para isso :
//Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
//inicialize as propriedades com estes valores.
//Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e cor.
//Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
//e cor.
//Ao final o algoritmo deve comparar se os carro são iguais.
//Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.

const rs = require('readline-sync');

class Carro {
    constructor() {
        this.nome = rs.question('Insira o nome do carro:');
        this.modelo = rs.question('Insira o modelo do carro:');
        this.cor = rs.question('Insira a cor do carro:');
    }

}
const carro1 = new Carro();
const carro2 = new Carro();

if(carro1.nome === carro2.nome){
    console.log('os carros são iguais')
} else {
    console.log ('os carros são diferentes')
}
