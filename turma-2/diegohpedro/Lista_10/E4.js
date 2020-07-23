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
    constructor(){
        this.nome = rs.question('Insira o nome do seu carro: ')
        this.modelo = rs.question('Insira o modelo do carro: ')
        this.cor = rs.question('Insira a cor do seu carro: ')
    }
    comparaCarro(carro1, carro2){
    carro1.nome === carro2.nome && carro1.modelo ===  carro2.modelo ? console.log(` ${carro1} e ${carro2} são iguais`) 
    : console.log(` ${carro1} e ${carro2} são diferentes`)
    }
}   

    console.log('=============== carro1==============')
    
    let carro1 = new Carro ()
    
    console.log('=============== carro2==============')
    
    let carro2 = new Carro ()
    
    comparaCarro(carro1, carro2)
    
    
    
    
    // if(carro1.nome === carro2.nome && carro1.modelo ===  carro2.modelo){
    //     console.log(` ${carro1} e ${carro2} são iguais`)

    // }
    // else {
    //     console.log(` ${carro1} e ${carro2} são diferentes`)
    // }
    
    
    