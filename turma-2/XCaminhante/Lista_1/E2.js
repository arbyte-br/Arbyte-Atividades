const rs = require('readline-sync')
var n = rs.questionInt('Um número, por favor: ')
console.log( (n % 2 == 0 ? 'PAR' : 'ÍMPAR') )
