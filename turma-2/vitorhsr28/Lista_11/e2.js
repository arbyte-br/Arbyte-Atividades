// 2. (OBRIGATÓRIO) Crie um algoritmo que conte quantos carros do Japan (Japão)
// existem na base cars.json
// O campo que define o país no cars.json é Origin
// A comparação da string pode ser utilizada usando a palavra “Japan”
// A resolução é similar ao exercício 1

const fs = require('fs')

const json = fs.readFileSync("cars.json")
const carros = JSON.parse(json)

const japoneses = (carros) => {
    if (carros.Origin == "Japan") {
        return carros
    }
}

let carrosJaponeses = carros.filter(japoneses).length

console.log(`Existem ${carrosJaponeses} carros japoneses na lista.`)
