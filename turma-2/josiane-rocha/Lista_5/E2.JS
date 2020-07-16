let rs = require('readline-sync')

var n0 = rs.question('Digite valor inicial: ')
var n1 = rs.question('Digite valor final: ')

if (n0 >= n1){
  console.log( 'NUMERO INICIAL MENOR QUE O NUMERO FINAL. ')
}else if (n0 < n1){
  for(null; n0 <= n1; n0++)
  console.log(n0)}
