// 1. (OBRIGATÓRIO) Crie um algoritmo que solicite um número para o usuário e diga
// quantos carros mais potentes que o valor informado.
// Para isso utilize a propriedade “Horserpower” do cars.json
// DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no
// google.

const rs = require('readline-sync')
const fs = require('fs')

const json = fs.readFileSync("cars.json")
const carros = JSON.parse(json)

const n = rs.questionInt('Informe um número e veja quantos carros mais potentes que ele estão na lista: ')

const maisPotentes = (carrosOrdenadosPorPotencia) => {
    return carrosOrdenadosPorPotencia.Horsepower >= n
}

let filtrados = carros.filter(maisPotentes).length

console.log(`${filtrados} carros da lista são mais potentes do que o número digitado.`)
