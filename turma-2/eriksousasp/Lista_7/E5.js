let rs = require('readline-sync')


function verificarValores(num1, num2) {
    num1 = rs.questionFloat('Digite o primeiro numero: ')
    num2 = rs.questionFloat('Digite o segundo numero: ')

    if (num1 > num2) {
        return console.log(`O menor numero é: ${num2}`)
    } else if (num1 == num2) {
        return console.log(`Os números são iguais`)
    } else {
        return console.log(`O menor numero é: ${num1}`)
    }
}
verificarValores()