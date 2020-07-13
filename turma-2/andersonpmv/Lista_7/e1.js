let rs = require('readline-sync');


function volEsfera(raio){
    let raioEsfera = rs.questionInt('informe o raio da esfera: ');
    let volume = ((4/3 * 3.14) * (raioEsfera ** 3))
    return volume.toFixed(2)
}

console.log(volEsfera())