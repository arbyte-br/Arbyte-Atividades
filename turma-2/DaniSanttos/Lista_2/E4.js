let rs = require('readline-sync')

let salario = rs.questionFloat('Informe o seu salário: ')
let emprestimo = rs.questionFloat('Informe o valor desejado do emprestimo: ')
let parcelas = rs.questionFloat('Informe em quantas parcelas você deseja parcelar o emprestimo: ')

let valorParcela = emprestimo / parcelas
let limiteSalario = (salario / 10) * 3

if (valorParcela > limiteSalario){
    console.log(`O valor da parcela vai sair no valor de R$${valorParcela.toFixed(2)}, que ultrapassa o valor estabelecido de 30% do seu salário e portanto não podemos liberar o empredtimo.`)
}else{
    console.log(`O valor da parcela é de ${valorParcela.toFixed(2)} e está dentro do limite estabelecido de 30% do salário, então seu emprestimo será liberado.`)
}