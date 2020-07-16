let rs = require("readline-sync")


let perguntaSalario = rs.questionInt("Qual o seu salário atualmente? \nR$")

console.log("\n====================================================\n")

console.log("Atenção: \npara que seja possível o empréstimo, \no valor das parcelas devem ser maior \ndo que 30% de seu salário!")

console.log("\n====================================================\n")

let valorEmprestimo = rs.questionInt("Qual o valor do empréstimo? \nR$")

let parcelasEmprestimo = rs.questionInt("Em quantas vezes deseja pagar? \n")

console.log("\n====================================================\n")

let trintaPorCentoSalario = perguntaSalario * 0.3

let valorPorParcela = valorEmprestimo / parcelasEmprestimo

let valorPorParcelaArredondado = Math.round(valorPorParcela * 100) / 100

if (valorPorParcelaArredondado > trintaPorCentoSalario) {
    console.log(`Seu salário: R$${perguntaSalario}.\n \nValor do empréstimo: R$${valorEmprestimo}.\n \nParcelas: ${parcelasEmprestimo}\n \nO valor de cada parcela será: R$${valorPorParcelaArredondado}\n \n30% de seu salário: R$${trintaPorCentoSalario}\n \nEmpréstimo não autorizado.\n`)
} else {
    console.log(`Seu salário: R$${perguntaSalario}.\n \nValor do empréstimo: R$${valorEmprestimo}.\n \nParcelas: ${parcelasEmprestimo}\n \nO valor de cada parcela será: R$${valorPorParcelaArredondado}\n \n30% de seu salário: R$${trintaPorCentoSalario}\n \nEmpréstimo autorizado.\n`)
}


