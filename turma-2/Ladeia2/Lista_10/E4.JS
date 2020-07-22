/* 4. (OBRIGATÓRIO) Criar um algoritmo que receba 2 carros e verifique se os carros são
iguais
Para isso :
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
inicialize as propriedades com estes valores.
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
cor.
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
e cor.
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor. */


let rs = require('readline-sync')
class Carro {
    constructor(){
        this.nome = rs.question('Digite o nome do seu carro: \n')
        this.modelo = rs.question('Digite o modelo do seu veiculo: \n')
        this.cor = rs.question('Digite a cor do seu veiculo: \n')
    }
}
let carro = new Carro
let carroDois = new Carro
let carroTres = new Carro

    if(carro.nome == carroDois.nome && carro.modelo == carroDois.modelo && carroTres.nome == carro.nome){
        console.log('Os dois carros são iguais.')
    }else{
        console.log('Os carros são diferentes.')
    }


