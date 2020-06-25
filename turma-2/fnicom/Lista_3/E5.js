let rs = require("readline-sync")

    let user = rs.questionInt("Digite 0 para sair ou 1 para continuar: \n")
    let quit = 0

    while(user !== quit){
        user = rs.questionInt("Digite 0 para sair ou 1 para continuar: \n")
    }

    console.log("Obrigado!!!")