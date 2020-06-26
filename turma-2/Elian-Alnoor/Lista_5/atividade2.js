let rs = require("readline-sync")

let n1 = rs.questionInt("insira o primeiro número: \n")

let n2 = rs.questionInt("insira o segundo número: \n")

if (n1 <= n2){
    for(n1; n1 <= n2; n1++){
        console.log(n1)
    }
}else { for(n2; n2 <= n1; n2++){
    console.log(n2)
}
}