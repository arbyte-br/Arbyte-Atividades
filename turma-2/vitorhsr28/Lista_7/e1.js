const rs = require('readline-sync');

const raio = rs.questionInt('Digite o raio da esfera:')
let conta

function rEsfera(conta) {
    return conta = (4 / 3 *Math.PI) * (raio * raio * raio)

} console.log(rEsfera(conta))