/*modulo do exercicio 3*/
const mediana = require(`median`);
const numeros = []

function media(numeros) {
     
    return mediana(numeros)
}

module.exports = {
     media,
     numeros
}