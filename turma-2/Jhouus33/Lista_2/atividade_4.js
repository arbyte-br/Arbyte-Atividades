// Uma empresa abriu uma linha de crédito para os funcionários.
// O valor da prestação não pode ultrapassar 30% do salário.
// Faça um programa que receba o salário, o valor do empréstimo e o número de
// prestações e informe se o empréstimo pode ser concedido. Assuma que nenhum
// dos valores informados será zero ou negativo.

let rs = require('readline-sync')

let salario = rs.questionFloat('Qual seu salário? \n')
let emprestimo = rs.questionFloat('Qual o valor desejado para empréstimo? \n')
let prestacoes = rs.questionInt('Em quantas parcelas você deseja quitar seu financiamento? \n')

let valorMensalEmprestimo =  emprestimo / prestacoes
if(valorMensalEmprestimo > (salario / 3)){
    console.log('Não. não, não! Você irá comprometar uma parte mto grande da sua renda, tente novamente com uma quantidade maior de parcelas')
}else{
    console.log("Ótimo! seu empréstimo estará disponivel em algumas horas")
}