// Criar um algoritmo que receba 2 carros e verifique se os carros são
// iguais
// Para isso :
// Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e
// inicialize as propriedades com estes valores.
// Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e
// cor.
// Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo
// e cor.
// Ao final o algoritmo deve comparar se os carro são iguais.
// Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor

let rs = require('readline-sync')

class carro {
    constructor(carro){
        this.montadora = rs.question('Digite a montadora do seu carro: ').toUpperCase(); // quase ninguem da nome ao carro, geralmente chama ele pelo modelo (Ex. tenho um Fox, Gol, Uno ...)
        this.modelo = rs.question('Digite o modelo do seu carro: ').toUpperCase();
        this.cor = rs.question('Qual a cor do seu carro? ')
    }

}

const car1 = new carro()
const car2 = new carro()
console.clear()
if(car1.modelo == car2.modelo && car1.montadora == car2.montadora){
    console.log(`O primeiro carro registrado (${car1.modelo} ${car1.cor}) é o mesmo modelo do segundo carro (${car2.modelo} ${car2.cor}) `) 
}else {
    console.log(`Bons carros, para alguem! `)
    console.log(`${car1.modelo}`)
}

