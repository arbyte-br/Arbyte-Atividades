const rs = require("readline-sync")



class Carro {
    constructor(){
        this.nome = rs.question("Digite o nome do carro: ")
        this.modelo = rs.question("Digite o modelo do carro: ")
        this.cor = rs.question("Digite a cor do carro: ")
    }  
}

function carrosIguais(carro1, carro2){
    if (carro1.nome === carro2.nome && carro1.modelo === carro2.modelo){
        console.log('Os nomes e os modelos dos 2 carros são iguais!') 
        console.log(listaCarros)  
    } else {
        console.log('Os carros são diferentes!')
        console.log(listaCarros)
    } 
}

const listaCarros = []

console.log('\n========================= Carro 1 =========================\n')

const carro1 = new Carro()

listaCarros.push(carro1)

console.log('\n========================= Carro 2 =========================\n')

const carro2 = new Carro()

listaCarros.push(carro2)

carrosIguais(carro1, carro2)
