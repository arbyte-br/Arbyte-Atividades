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