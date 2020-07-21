//Criar um algoritmo que receba 2 carros e verifique se os carros são iguais Para isso :  
//Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e inicialize as propriedades com estes valores. 
//Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e cor. 
//Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo e cor.  
//Ao final o algoritmo deve comparar se os carro são iguais. Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.

let rs = require('readline-sync')

class carro{
    constructor(){
    this.nome = rs.question('Qual o nome do carro: ')
    this.modelo = rs.question('Qual o modelo do carro: ')
    this.cor = rs.question('Digite a cor do carro: ')
    }    
} 

const dadoscarro1 = new carro()
const dadoscarro2 = new carro()


if(dadoscarro1.nome == dadoscarro2.nome && dadoscarro1.modelo == dadoscarro2.modelo){
    console.log('Os carros são iguais')
}else{
    console.log('Os carros não são iguais');
}


