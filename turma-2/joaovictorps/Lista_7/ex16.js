let rs = require('readline-sync')

function calcularVolume(raio) {
    let volume = 4/3*3.14*raio**3
    return volume
}
let r = Number(rs.question('Digite o raio da esfera: \n'))

console.log(calcularVolume(r).toFixed(2))