// 3. (OBRIGATÓRIO) Crie um algoritmo que conte quantos carros da Ford existem no
// cars.json.
// A resolução é similar ao exercício 1, porém utilize o método “includes” com parâmetros
// “Ford” na propriedade Car para realizar a contagem.

const fs = require('fs')

const json = fs.readFileSync("cars.json")
const carros = JSON.parse(json)

const ford = (carros) => {
    if (carros.Car.includes("Ford")) {
        return carros
    }
}

let carrosFord = carros.filter(ford).length

console.log(`Existem ${carrosFord} carros da marca Ford na lista.`)
