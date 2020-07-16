/*Uma empresa abriu uma linha de crédito para os funcionários.
O valor da prestação não pode ultrapassar 30% do salário.
Faça um programa que receba o salário, o valor do empréstimo e o número de
prestações e informe se o empréstimo pode ser concedido. Assuma que nenhum
dos valores informados será zero ou negativo.*/

let rs = require(`readline-sync`)
let salario = rs.questionInt(`Informe o valor do seu salario: `)
let emprestimo = rs.questionInt(`Informe o valor do imprestimo: `)
let numeroPrestacao = rs.questionInt(`Informe o numero de parcelas: `)
console.clear()

let parcela = emprestimo / numeroPrestacao

if(parcela <= 0.3*salario){
    console.log(`Emprestimo Autorizado!`)
}else{
    console.log(`Emprestimo Negado!`)
}
