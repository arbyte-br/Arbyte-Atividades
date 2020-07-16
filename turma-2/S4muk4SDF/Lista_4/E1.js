let rs = require("readline-sync")

let numero1 = rs.questionInt("Digite um numero de 1 a 100\n")

let numero2 = rs.questionInt("Digite outro numero de 1 a 100\n")

let inicioDoLoop = 0

let fimDoLoop = 100

if (numero1 > numero2) {
    inicioDoLoop = numero2
    fimDoLoop = numero1
} 
else if (numero1 < numero2){

    inicioDoLoop = numero1
    fimDoLoop = numero2

} 
else {
    console.log("Números Inválidos")
}

while (inicioDoLoop <= fimDoLoop){
    
    if (inicioDoLoop % 5 == 0 && inicioDoLoop % 7 == 0){
        console.log(inicioDoLoop + " Ping Pong")
    } 
    else if (inicioDoLoop % 5 == 0){
        console.log(inicioDoLoop + " Ping")
    } 
    else if (inicioDoLoop % 7 == 0){
        console.log(inicioDoLoop + " Pong")
    }    
    else {
        console.log(inicioDoLoop)
    }
    inicioDoLoop ++
}