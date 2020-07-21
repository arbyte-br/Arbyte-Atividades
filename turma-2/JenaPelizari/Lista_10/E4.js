/** Criar um algoritmo que receba 2 carros e verifique se os carros são
iguais Para isso :
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
inicialize as propriedades com estes valores. Após isso informe ao usuário para cadastrar 
o primeiro carro e peça, o nome, modelo e cor. Após informar o primeiro carro peça o segundo 
carro também solicitando nome, modelo e cor. Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor */

let rs = require("readline-sync")
class Carro {
    constructor(name) {
        this.name = rs.question("Digite um nome: \n")
        this.modelo = rs.question("Digite o modelo: \n")
        this.cor = rs.question("Digite a cor: \n ")
    }
}

var carro1 = new Carro();
var carro2 = new Carro();
if (carro1.name == carro2.name && carro1.modelo == carro2.modelo){
    console.log(`Os carros são iguais!`)
}
else {
    console.log(`Os carros não são iguais!`)
}