let rs = require('readline-sync');

let salario = Number(rs.question('Qual seu salario? '));
let emprestimo = Number(rs.question('Qual o valor do emprestimo desejado? '));
let parcelas = Number(rs.question('Em quantas parcelas? '));

let porcentagem = salario * 0.3;

let mensal = emprestimo / parcelas;

console.log('O valor da parcela ficaria ' + mensal);

if (porcentagem >= parcelas) {
    console.log('Pode solicitar o emprestimo!')
} else {
    console.log('Escolha um valor menor de emprestimo ou um numero maior de parcelas.')
}