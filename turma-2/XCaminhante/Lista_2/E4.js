const rs = require('readline-sync')
function apenasPositivos (num) { return !Number.isNaN(num) && num > 0 }
var msgLimite = 'Apenas valores numéricos acima de 0'
var opts = {limit:apenasPositivos, limitMessage:msgLimite}
var salario = rs.question('Salário? ',opts)
var emprest = rs.question('Empréstimo? ',opts)
var prestac = rs.question('Quantas parcelas? ',opts)
var parcela = emprest/prestac
if (parcela <= (salario*0.3)) {
  console.log('Empréstimo aprovado')
} else {
  console.log('Não tem condições para esse empréstimo')
}
