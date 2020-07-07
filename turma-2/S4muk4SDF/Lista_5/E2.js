let rs = require("readline-sync")

let valorInicial = rs.questionInt("Digite um valor: ")
let valorFinal = rs.questionInt("Agora, digite um valor maior que o primeiro: ")

if (valorInicial < valorFinal) {
    console.log("Início da contagem.")
    for (valorInicial; valorInicial <= valorFinal; valorInicial++) {
        console.log(valorInicial)
    }
    console.log("Final da contagem. ")
}else {
    console.log("Valores incorretos.")
}