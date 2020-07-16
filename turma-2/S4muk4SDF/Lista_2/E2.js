// Para converter graus Celsius em graus Fahrenheit, multiplique por 1,8 e adicione 32. 
// Para converter graus Fahrenheit em graus Celsius, subtraia 32 e divida por 1,8.

let rs = require("readline-sync")


let perguntaUsuario = rs.questionInt("\n Digite 1 para converter graus Celsius para Fahrenheit. \n Digite 2 para converter Fahrenheit para Celsius. \n ")

if (perguntaUsuario == 1) {
    let celsius = rs.questionInt("Digite a temperatura que quer converter: ")

    let resultado = (celsius * 1.8) + 32

    console.log(`${celsius} em Fahrenheit é: ${resultado}`)

} else if (perguntaUsuario == 2) {
    let Fahrenheit = rs.questionInt("Digite a temperatura Fahrenheit que quer converter: ")

    let resultado = (Fahrenheit - 32) / 1.8

    console.log(`${Fahrenheit} em Celsius é: ${resultado}`)
}