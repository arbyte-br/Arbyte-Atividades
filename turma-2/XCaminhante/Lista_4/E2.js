const rs = require('readline-sync')
var primos = [1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]
for (var i=1; i<=50; i++) {
  var r = `${i} `
  if (i % 2 == 0) { r += 'PAR' } else { r += 'ÍMPAR' }
  if (primos.indexOf(i) != -1) { r += ' PRIMO' }
  console.log(r)
}
