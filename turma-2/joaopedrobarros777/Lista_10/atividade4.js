//Criar um algoritmo que receba 2 carros e verifique se os carros são
//iguais
//Para isso :
//Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
//inicialize as propriedades com estes valores.
//Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
//cor.
//Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
//e cor.
//Ao final o algoritmo deve comparar se os carro são iguais.
//Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.

let rs = require("readline-sync")

class Carro {
    constructor(marca, modelo, cor) {
        this.marca = rs.question("Digite a marca do carro: \n")
        this.modelo = rs.question("Digite o modelo do carro: \n")
        this.cor = rs.question("Digite a cor do carro \n")
    }
}

var carro1 = new carro()
var carro2 = new carro()

console.log(carro1)
console.log(carro2)

if (carro1.marca == carro2.marca && carro1.modelo == carro2.modelo){
    console.log("os carros sao iguais!")
} else {
    console.log("os carros nao sao iguais")
}