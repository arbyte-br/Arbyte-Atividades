const rs = require('readline-sync')
var sexo = rs.keyInSelect(['feminino','masculino'],'Sexo?')
if (sexo == -1) { console.log('Cancelado'); process.exit() }
var altura = rs.questionFloat('Altura? ')
function pesoSugerido (sexo,altura) {
  var p = [[62.1, 44.7], [72.7, 58]] [sexo]
  return (p[0] * altura) - p[1]
}
var peso = new Number( pesoSugerido(sexo,altura) ).toFixed(2)
console.log('Seu peso sugerido: '+peso)
