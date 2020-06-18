const rs = require('readline-sync')
var qual = rs.keyInSelect(['Celsius','Fahrenheit'],'Qual a unidade de origem?')
if (qual == -1) { console.log('Cancelado'); process.exit() }
var t = rs.questionFloat('Temperatura? ')
function F_C (temp) { return (temp-32)/1.8 }
function C_F (temp) { return temp*1.8+32 }
if (qual == 0) {
  console.log('Em Fahrenheit: '+C_F(t))
} else {
  console.log('Em Celsius: '+F_C(t))
}
