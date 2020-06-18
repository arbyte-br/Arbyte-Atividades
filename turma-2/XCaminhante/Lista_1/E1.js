const rs = require('readline-sync')
var ano = rs.questionInt('Será que você pode votar este ano? Informe seu ano de nascimento: ')
var anoAtual = new Date().getFullYear()
console.log( (anoAtual-ano >= 16 ? 'Sim, pode' : 'Este ano ainda não') )
