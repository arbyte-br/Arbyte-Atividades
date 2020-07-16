let user = require("readline-sync")

let Salario = user.questionInt("Quanto você rescebe por mês ? ")

let Emprestimo = user.questionInt("Quanto você quer de empréstimo ? ")

let Parcelas = user.questionInt("Em quantas parcelas você quer ? ")

let Porcentagem =( (30 * Salario) / 100)

if (Emprestimo > Porcentagem) {
    console.log("Não será possível, o valor de empréstimo ultrapassa 30% do seu salário")
}

else {
    console.log("Parabéns seu empréstimo foi aprovado, você irá pagar", Emprestimo, "Reais em", Parcelas, "parcelas") 
}