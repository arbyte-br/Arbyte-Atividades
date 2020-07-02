let rs = require('readline-sync');

let pi = 3.14;
let raio = rs.questionInt('Digite o raio: ');

function calcularVolume(raio){
  let raioElevado = Math.pow(raio, 3);
  let volume = ((4 / 3) * pi) * raioElevado;

  return volume;
}

console.log(calcularVolume(raio).toFixed(2), 'o valor da esfera.');
