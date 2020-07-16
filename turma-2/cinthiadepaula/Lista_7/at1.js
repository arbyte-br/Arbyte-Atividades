let rs = require('readline-sync');

let raio = rs.questionInt('digite o valor do raio: ')

function volume(raio) {
    let volume = (4 / 3) * 3.14 * (raio * raio * raio);
    return volume
}


console.log(volume(raio).toFixed(2))