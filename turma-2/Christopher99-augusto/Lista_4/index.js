let readline = require("readline-sync")

let numero1 = readline.questionInt("Escolha o 1º numero : ")

while (numero1 < 1 || numero1 > 100) {
    console.log("O numero não está entre 1 e 100")
    
    numero1 = readline.questionInt("Escolha o 1º numero : ")
}
let numero2 = readline.questionInt("Escolha o 2º numero : ")

while (numero2 < 1 || numero2 > 100) {
    console.log("O numero não está entre 1 e 100")
    
    let numero1 = readline.questionInt("Escolha o 1º numero : ")
}

let maiornumero = Math.max (numero1, numero2);

let menornumero = Math.min (numero1, numero2)

while (menornumero <= maiornumero) {
    
    if (menornumero % 7 == 0 && menornumero % 5 == 0 ) {
        console.log("PING PONG")
    }
    else if (menornumero % 7 == 0) {
        console.log("PING")
    }
    else if (menornumero % 5 == 0) {
        console.log("PONG")
    }
    else {
        console.log(menornumero)
    }
    menornumero++
}
