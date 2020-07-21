

let rs= require('readline-sync')

class carros {
    constructor(){
            this.nome= rs.question('Qual carro?')
            this.modelo= rs.question('Qual modelo?')
            this.cor= rs.question('Qual cor?')
    }
}

let carro1 = new carros ()
let carro2 = new carros ()

if (carro1.nome == carro2.nome && carro1.modelo == carro2.modelo){
    console.log('Os carros são iguais')
} else {
    console.log('Os carros não são iguais')
}
