let rs = require("readline-sync")

    let usuario = rs.questionInt("Por favor, digite 0 para sair ou 1 para continuar: \n")
    let sair = 0

    while(usuario !== sair){
        usuario = rs.questionInt("Por favor, digite 0 para sair ou 1 para continuar: \n")
    }

    console.log("Volte Sempre!")