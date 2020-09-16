const cars = require('./cars.json')
const rs = require('readline-sync')

const acharMaiorAceleracao= (cars) => {
    let carroMaiorAceleracao;
    let ultimaAceleracao = 0

    cars.forEach(carro => {
        if(carro.Acceleration > ultimaAceleracao) {
            carroMaiorAceleracao = carro
            ultimaAceleracao = carro.Acceleration
        }
    })

    console.log(carroMaiorAceleracao)
}


const acharMaiorPotencia = (cars) => {
    let carroMaiorHorsepower;
    let ultimaHorsepower = 0

    cars.forEach(carro => {
        if(carro.Horsepower > ultimaHorsepower) {
            carroMaiorHorsepower = carro
            ultimaHorsepower = carro.Horsepower
        }
    })

    console.log(carroMaiorHorsepower)
} 

let resposta = rs.question('[A] - Carro com maior aceleração. \n[B] - Carro com maior potência.\n')
if(resposta == "A") {
    acharMaiorAceleracao(cars)
} else if (resposta == "B") {
    acharMaiorPotencia(cars)
} else {
    console.log(`Opção digitada inválida!`)
}