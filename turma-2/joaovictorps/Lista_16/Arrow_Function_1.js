const cars = require('./cars.json')
const rs = require('readline-sync')

let cavalaria = rs.question('Digite um número mínimo de cavalaria. \n')

console.log(`Carros com cavalaria maior que ${cavalaria} .`)
cars.forEach(carro => {
    if(carro.Horsepower >= cavalaria) {
        console.log(carro.Car)
    }
});
