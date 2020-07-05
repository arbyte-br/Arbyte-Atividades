let rs = require('readline-sync')

function cubo(n1) {
    return n1 * n1 * n1
}


function volume (raio){
  return 4 * Math.PI * cubo(raio) / 3
}

let raio = rs.questionInt('Digite o raio: ')

console.log(`O volume de uma esfera com raio ${raio} é ${volume(4)} m³`)
