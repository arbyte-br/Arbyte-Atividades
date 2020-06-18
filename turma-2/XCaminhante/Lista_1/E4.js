const rs = require('readline-sync')
var nm = rs.questionInt('Número de maçãs: ')
var vpm = ( nm >= 12 ? 0.25 : 0.3 )
var vt = nm * vpm
console.log( 'Preço: R$ ' + Number(vt).toFixed(2) )
