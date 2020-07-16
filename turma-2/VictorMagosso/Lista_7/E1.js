let rs = require('readline-sync')

function volumeEsfera(raio = rs.questionFloat('Informe o raio da esfera: ')){
    let volume = (4*3.14*Math.pow(raio, 3)/3)

    return volume.toFixed(2)
}

console.log(`O volume da esfera é: ${volumeEsfera()}`)