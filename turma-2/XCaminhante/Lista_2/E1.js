const rs = require('readline-sync')
var valProduto = rs.questionFloat('Valor do produto? ')
var valMoedas = [1, 0.5, 0.25, 0.10, 0.05, 0.01]
var moedas = ['1 real','50 centavos','25 centavos','10 centavos','5 centavos','1 centavo']
var valorPago = moedas
  .map( (c) => rs.questionInt(`Quantas moedas de ${c}? `) )
  .map( (q,i) => q*valMoedas[i] )
  .reduce( (a,v) => a+v, 0 )
if (valorPago >= valProduto) {
  console.log('O valor pago é suficiente')
} else {
  console.log('Não tem moedas suficientes')
}
