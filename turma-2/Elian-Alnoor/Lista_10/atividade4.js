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
// Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.  

const rs = require('readline-sync')

class Carro{
    constructor(){
        this.nome = rs.question('Informe o nome do seu carro:\n'),
        this.modelo = rs.question('Informe o modelo do seu carro:\n')
        this.cor = rs.question('Informe a cor do seu carro:\n')
    }
}

const carro1 = new Carro()
const carro2 = new Carro()

if (carro1.nome === carro2.nome && carro1.modelo === carro2.modelo){
    console.log(`Os dois carros são iguais, modelo ${carro1.modelo} e nome ${carro2.nome}`)
} else{
    console.log('Os dois carros são diferentes!')
}