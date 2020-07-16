let readline = require("readline-sync")

let pergunta = readline.question("O que você é para converter ? \nDigite 1 para converter GrausºC para Fº \nDigite 2 para converter Fº em GrausºC")

if (pergunta == 1) {
    let celsius = readline.questionInt("Quantos Celsius ? ")
    
    let resultado = ((celsius * 9) / 5) + 32

    console.log(celsius, "Celsius são", resultado , "Farenheit")
}

else if (pergunta == 2) {
    let fahrenheit = readline.questionInt("Quantos Fahrenheit ? ")
    
    let resultado = ((fahrenheit - 32) * 5) / 9
    
    console.log(fahrenheit, "Farenheit são", resultado, "Celsius")
}

else {
    console.log("Não entendi \nDigite novamente")
}