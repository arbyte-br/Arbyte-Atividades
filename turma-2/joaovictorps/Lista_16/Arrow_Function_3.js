const cars = require('./cars.json')
const rs = require('readline-sync')

let carroMaior;
const acharMaiorAceleracao= (cars) => {
    for (let i = 0; i < cars.length; i++) {
        let carro = cars[i]
        let achouMaior = false
        for(let j = 0; j < cars.length; j++) {
            let carro2 = cars[j]
            if(carro.Acceleration < carro2.Acceleration) {
                achouMaior = true
            }
        }
    
        if(achouMaior === false) {
            carroMaior = carro
        }
        
    }

    console.log(`Carro com maior aceleração: ${carroMaior}`)
}


const acharMaiorPotencia = (cars) => {
    for (let i = 0; i < cars.length; i++) {
        let carro = cars[i]
        let achouMaior = false
        for(let j = 0; j < cars.length; j++) {
            let carro2 = cars[j]
            if(carro.Horsepower < carro2.Horsepower) {
                achouMaior = true
            }
        }
        
        if(achouMaior === false) {
            carroMaior = carro
        }
        
    }

    console.log(`Carro com maior potência: ${carroMaior}`)
} 

let resposta = rs.question('[A] - Carro com maior aceleração. \n[B] - Carro com maior potência.\n')
if(resposta == "A") {
    acharMaiorAceleracao(cars)
} else if (resposta == "B") {
    acharMaiorPotencia(cars)
} else {
    console.log(`Opção digitada inválida!`)
}