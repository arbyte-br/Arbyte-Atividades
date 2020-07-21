let rs = require('readline-sync')

class Carro {
    constructor(){
        this.nome = rs.question('Usuario, digite o nome do seu veiculo(marca): \n')
        this.modelo = rs.question('Usuario, digite o modelo do seu veiculo: \n')
        this.cor = rs.question('Usuario, digite a cor do seu veiculo: \n')
    }
}
let carro = new Carro
let carroDois = new Carro
    if(carro.nome == carroDois.nome && carro.modelo == carroDois.modelo){
        console.log('Os dois carros são iguais.')
    }else{
        console.log('Os carros são diferentes.')
    }