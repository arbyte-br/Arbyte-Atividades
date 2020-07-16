var mediana = require('median')
var rs = require('readline-sync')

numero1 = rs.questionFloat("Informe o primeiro numero: ")
numero2 = rs.questionFloat("Informe o segundo numero: ")
numero3 = rs.questionFloat("Informe o terceiro numero: ")
numero4 = rs.questionFloat("Informe o quarto numero: ")

function calcularMedia(n1, n2, n3, n4){
    let arr = [n1, n2,  n3, n4]
    var value = mediana(arr)
    console.log("A mediana dos números é: "+value)
}


calcularMedia(numero1, numero2, numero3, numero4);
