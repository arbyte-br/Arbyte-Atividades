var rs = require('readline-sync');

var salario = 0;
var credito = 0;
var prestacao = 0;
var div = 0;
var div2 = 0;

console.log('Quer saber se você tem direito ao emprestimo? Insira os dados abaixo: ')

var salario = rs.questionFloat('Informe seu salário: ');
var credito = rs.questionFloat('Informe o valor do crédito que precisa: ');
var prestacao = rs.questionInt('Informe o número de parcelas: ');

div = salario * 0.3;
div2 = credito / prestacao;


if(div2 < div){
    console.log(`Seu salário é ${salario}. Então você tem direito ao crédito de ${credito}. Parabéns!`)
    console.log(`Será(ão) ${prestacao} prestação(ões) de: ${div2.toFixed(2)}`)
}else if(div2 > div && div2 > 0 && div > 0){
    console.log('Infelizmente você não terá acesso aos valores!')
}else if(salario <= 0 && credito <= 0 || prestacao >= 13 || prestacao <= 0){
    console.log('Insira um valor válido!')
}