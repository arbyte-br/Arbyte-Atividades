let rs = require("readline-sync")


    let numero1 = rs.questionInt("Digite O primeiro numero da multiplicacao: \n")
    let numero2 = rs.questionInt("Ele vai ser multiplicado por: \n")

    let contador = 0
    let resultado = 0

    while(contador !== numero2){
        resultado = resultado + numero1
        contador = contador + 1
    }

    console.log("O resultado da multiplicacao e: " + resultado)
    